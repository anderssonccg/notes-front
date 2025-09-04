import { Note } from "../Note/Note";
import styles from "./NoteList.module.css";
import { motion, AnimatePresence } from "framer-motion";

export const NoteList = ({
  notes,
  onToggleComplete,
  onToggleImportant,
  onDelete,
  onEdit,
}) => {
  return (
    <>
      {notes.length === 0 ? (
        <h1 className={styles.title}>No existen notas creadas</h1>
      ) : (
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
                  onDelete={() => onDelete(note.id)}
                  onEdit={() => onEdit(note)}
                  handleToggleComplete={() => onToggleComplete(note.id)}
                  handleToggleImportant={() => onToggleImportant(note.id)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )}
    </>
  );
};
