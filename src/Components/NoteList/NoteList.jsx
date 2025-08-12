import React from "react";
import { Note } from "../Note/Note";
import styles from "./NoteList.module.css";

export const NoteList = ({
  notes,
  onDelete,
  onEdit,
  onToggle,
  toggleImportant,
}) => {
  const handleDelete = (id) => {
    onDelete(id);
  };

  const handleEdit = (id) => {
    onEdit(id);
  };

  const handleToggleComplete = (id) => {
    onToggle(id);
  };

  const handleToggleImportant = (id) => {
    toggleImportant(id);
  };

  return (
    <div className={styles.noteList}>
      {notes.map((note) => (
        <Note
          key={note.id}
          {...note}
          onDelete={() => handleDelete(note.id)}
          onEdit={() => handleEdit(note.id)}
          handleToggleComplete={() => handleToggleComplete(note.id)}
          handleToggleImportant={() => handleToggleImportant(note.id)}
        />
      ))}
    </div>
  );
};
