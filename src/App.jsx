import { Home } from "./Pages/Home";
import { CreateNotes } from "./Pages/CreateNotes";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./Pages/Layout";
import { NavBar } from "./Components/NavBar/NavBar";
import { useEffect, useState } from "react";

export const App = () => {
  const initialTags = JSON.parse(localStorage.getItem("tags"));
  const [tags, setTags] = useState(new Set(initialTags));
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes")) || []);
  const [filteredNotes, setFilteredNotes] = useState(JSON.parse(localStorage.getItem("filteredNotes")) || notes);
  const [filter, setFilter] = useState("");
  const [selectedTag, setSelectedTag] = useState("");

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
            note.description.toLowerCase().includes(filterValue.toLowerCase())) &&
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

  const checkImportant = (id) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, isImportant: !note.isImportant } : note
      )
    );
  };

  const updateNote = (/*id*/) => {};

  const deleteNote = (id) => {
    const noteFound = notes.find((note) => note.id === id);
    if(noteFound){
      const notesWithTag = notes.filter((note) => note.tag === noteFound.tag);
      if(notesWithTag.length === 1){
          setTags((prev) => {
            prev.delete(noteFound.tag);
            return new Set(prev);
          });
      }
    }
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
