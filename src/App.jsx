import { Home } from "./Pages/Home";
import { CreateNotes } from "./Pages/CreateNotes";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Layout } from "./Pages/Layout";
import { NavBar } from "./Components/NavBar/NavBar";
import { useEffect, useState } from "react";
import { Error } from "./Pages/Error/Error";

const getTags = () => {
  return JSON.parse(localStorage.getItem("tags"));
};

const getNotes = () => {
  return JSON.parse(localStorage.getItem("notes")) || [];
};

const getFilteredNotes = () => {
  return JSON.parse(localStorage.getItem("filteredNotes")) || [];
};

export const App = () => {
  const [tags, setTags] = useState(new Set(getTags()));
  const [notes, setNotes] = useState(getNotes());
  const [filteredNotes, setFilteredNotes] = useState(getFilteredNotes());
  const [filter, setFilter] = useState("");
  const [selectedTag, setSelectedTag] = useState("");
  const [editingNote, setEditingNote] = useState(null);
  const [selectedNotes, setSelectedNotes] = useState([]);
  // Para saber si se eliminaron notas
  const navigate = useNavigate();

  // Sincronizar `selectedNotes` automáticamente
  useEffect(() => {
    setSelectedNotes(notes.filter((note) => note.isComplete));
  }, [notes]);

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
    localStorage.setItem("filteredNotes", JSON.stringify(filteredNotes));
    localStorage.setItem("tags", JSON.stringify([...tags]));
  }, [notes, filteredNotes, tags]);

  useEffect(() => {
    setFilteredNotes(
      notes.filter(
        (note) =>
          (note.title.toLowerCase().includes(filter.toLowerCase()) ||
            note.description.toLowerCase().includes(filter.toLowerCase())) &&
          (!selectedTag || note.tag === selectedTag)
      )
    );
  }, [notes, filter, selectedTag]);

  const filterNotes = (filterValue, tagValue) => {
    setFilter(filterValue);
    setSelectedTag(tagValue);
    setFilteredNotes(
      notes.filter(
        (note) =>
          (note.title.toLowerCase().includes(filterValue.toLowerCase()) ||
            note.description
              .toLowerCase()
              .includes(filterValue.toLowerCase())) &&
          (!tagValue || note.tag === tagValue)
      )
    );
  };

  const addNote = (newNote) => {
    if (newNote.tag) setTags((prev) => new Set(prev.add(newNote.tag)));
    setNotes((prevNotes) => [
      ...prevNotes,
      {
        id: Date.now(),
        ...newNote,
      },
    ]);
    setFilteredNotes((prevNotes) => [
      ...prevNotes,
      {
        id: Date.now(),
        ...newNote,
      },
    ]);
  };

  const deleteNote = (ids) => {
    // Convertimos a array siempre, para que el código sea más simple
    const idsToDelete = Array.isArray(ids) ? ids : [ids];

    // Obtenemos las notas que vamos a eliminar
    const notesToDelete = notes.filter((note) => idsToDelete.includes(note.id));

    // Verificamos tags que deben eliminarse
    notesToDelete.forEach((noteToDelete) => {
      const notesWithSameTag = notes.filter(
        (note) => note.tag === noteToDelete.tag
      );
      if (notesWithSameTag.length === 1) {
        // Si es la última nota con ese tag, quitamos el tag
        setTags((prev) => {
          prev.delete(noteToDelete.tag);
          return new Set(prev);
        });
      }
    });

    // Eliminamos de notes
    setNotes((prev) => prev.filter((note) => !idsToDelete.includes(note.id)));

    // Eliminamos de filteredNotes también
    setFilteredNotes((prev) =>
      prev.filter((note) => !idsToDelete.includes(note.id))
    );
  };

  const updateNote = (updatedNote) => {
    // Detecta el tag original antes de actualizar
    const noteFound = notes.find((note) => note.id === updatedNote.id);
    const originalTag = noteFound ? noteFound.tag : null;

    // Actualiza la nota en los estados
    setNotes((prevNotes) =>
      prevNotes.map((note) => (note.id === updatedNote.id ? updatedNote : note))
    );
    setFilteredNotes((prevNotes) =>
      prevNotes.map((note) => (note.id === updatedNote.id ? updatedNote : note))
    );

    // Si el tag original ya no tiene notas, elimínalo
    if (originalTag && originalTag !== updatedNote.tag) {
      // Busca si quedan notas con el tag original
      const notesWithOriginalTag = notes
        .filter((note) => note.id !== updatedNote.id)
        .filter((note) => note.tag === originalTag);
      if (notesWithOriginalTag.length === 0) {
        setTags((prev) => {
          const newTags = new Set(prev);
          newTags.delete(originalTag);
          return newTags;
        });
      }
    }

    // Si el nuevo tag no existe, agrégarlo
    if (updatedNote.tag && !tags.has(updatedNote.tag)) {
      setTags((prev) => new Set(prev.add(updatedNote.tag)));
    }

    setEditingNote(null);
    navigate("/");
  };

  const handleEdit = (note) => {
    // Buscar nota por id y guardar la nota encontrada
    const noteToEdit = notes.find((n) => n.id === note);
    if (!noteToEdit) return;
    // Guardar que nota estamos editando
    setEditingNote(note);
    // Navegar a la página de creación de notas
    navigate("/notes/create");
  };

  const handleSelectNote = (id) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, isComplete: !note.isComplete } : note
      )
    );
  };

  return (
    <>
      <NavBar filterNotes={filterNotes} tags={tags} />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Home
                notes={filteredNotes}
                deleteNote={deleteNote}
                setNotes={setNotes}
                onEdit={handleEdit}
                onSelect={handleSelectNote}
                notesToDelete={selectedNotes}
              />
            }
          />
          <Route
            path="notes/create"
            element={
              <CreateNotes
                addNote={addNote}
                updateNote={updateNote}
                setEditingNote={setEditingNote}
                noteToEdit={notes.find((n) => n.id === editingNote)}
                tags={tags}
              />
            }
          />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
