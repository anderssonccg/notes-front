import { Home } from "./Pages/Home";
import { CreateNotes } from "./Pages/CreateNotes";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./Pages/Layout";
import { NavBar } from "./Components/NavBar/NavBar";
import { useState } from "react";

export const App = () => {
  const [tags, setTags] = useState(new Set());
  const [notes, setNotes] = useState([]);
  const [filteredNotes, setFilteredNotes] = useState(notes);

  const filterNotes = (filter, tag) => {
    setFilteredNotes(notes);
    setFilteredNotes((prev) =>
      prev.filter(
        (note) =>
          (note.title.toLowerCase().includes(filter.toLowerCase()) ||
            note.description.toLowerCase().includes(filter.toLowerCase())) &&
          (!tag || note.tag === tag)
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

  const checkImportant = (id) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, isImportant: !note.isImportant } : note
      )
    );
  };

  const updateNote = (/*id*/) => {};

  const deleteNote = (id) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
    setFilteredNotes((prev) => prev.filter((note) => note.id !== id));
  };

  return (
    <>
      <NavBar filterNotes={filterNotes} tags={tags} />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={<Home notes={filteredNotes} deleteNote={deleteNote} setNotes={setNotes}/>}
          />
          <Route
            path="notes/create"
            element={<CreateNotes addNote={addNote} />}
          />
        </Route>
      </Routes>
    </>
  );
};

export default App;
