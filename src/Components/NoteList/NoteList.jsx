import React from "react";
import { Note } from "../Note/Note";
import styles from "./NoteList.module.css";
import { AnimatePresence } from "framer-motion";

export const NoteList = ({
  notes,
  onDelete,
  onEdit,
  onToggleComplete,
  onToggleImportant,
}) => {
  const handleDelete = (id) => onDelete(id);
  const handleEdit = (id) => onEdit(id);
  const handleToggleComplete = (id) => onToggleComplete(id);
  const handleToggleImportant = (id) => onToggleImportant(id);

  return (
    <div className={styles.noteList}>
      <AnimatePresence>
        {notes.map((note) => (
          <motion.div
            key={note.id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <Note
              {...note}
              onDelete={() => handleDelete(note.id)}
              onEdit={() => handleEdit(note.id)}
              handleToggleComplete={() => handleToggleComplete(note.id)}
              handleToggleImportant={() => handleToggleImportant(note.id)}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};
