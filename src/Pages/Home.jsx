import { useState } from "react";

export const Home = () => {
  const [notes, setNotes] = useState([]);

  const handleAddNote = (newNote) => {
  setNotes((prevNotes) => [
    ...prevNotes,
    {
      id: Date.now(),
      isComplete: false,        
      isImportant: false,       
      ...newNote              
    }
  ]);
};

  const handleToggleImportant = (id) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, isImportant: !note.isImportant } : note
      )
    );
  };

  // Para editar la nota en dado caso que se vea necesario
  const handleEdit = (/*id*/) => {};

  const handleDelete = (id) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  const handleToggleComplete = (id) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id ? { ...note, isComplete: !note.isComplete } : note
      )
    );
  };

  return (
    <div>
      <NoteList
        notes={notes}
        onDelete={handleDelete}
        onEdit={handleEdit}
        onToggle={handleToggleComplete}
        toggleImportant={handleToggleImportant}
      />
    </div>
  );
};
