import { Home } from "./Pages/Home";
import { CreateNotes } from "./Pages/CreateNotes";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./Pages/Layout";
import { useState } from "react";

export const App = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes((prevNotes) => [
      ...prevNotes,
      {
        id: Date.now(),
        ...newNote,
      },
    ]);
    console.log(newNote);
  };

  const checkImportant = (id) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, isImportant: !note.isImportant } : note
      )
    );
  };

  // Para editar la nota en dado caso que se vea necesario
  const updateNote = (/*id*/) => {};

  const deleteNote = (id) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  // const handleToggleSelect = (id) => {
  //   setNotes((prev) =>
  //     prev.map((note) =>
  //       note.id === id ? { ...note, isComplete: !note.isComplete } : note
  //     )
  //   );
  // };

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home notes={notes} deleteNote={deleteNote} />} />
        <Route
          path="notes/create"
          element={<CreateNotes addNote={addNote} />}
        />
      </Route>
    </Routes>
  );
};
