import { Home } from "./Pages/Home";
import { CreateNotes } from "./Pages/CreateNotes";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./Pages/Layout";
import { NavBar } from "./Components/NavBar/NavBar";
import { useState } from "react";

export const App = () => {
  const [notes, setNotes] = useState([]);
  const [filteredNotes, setFilteredNotes] = useState(notes);

  const filterNotes = (e) => {
    const filter = e.target.value;
    setFilteredNotes(notes);
    setFilteredNotes((prev) =>
      prev.filter(
        (note) =>
          note.title.toLowerCase().includes(filter.toLowerCase()) ||
          note.description.toLowerCase().includes(filter.toLowerCase())
      )
    );
  };

  const addNote = (newNote) => {
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
      <NavBar filterNotes={filterNotes} />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={<Home notes={filteredNotes} deleteNote={deleteNote} />}
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
