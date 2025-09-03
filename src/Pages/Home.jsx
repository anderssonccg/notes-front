import { useEffect } from "react";
import { NoteList } from "../Components/NoteList/NoteList";
import { TrashButton } from "../Components/NoteList/TrashButton";
import { useNote } from "../hook/useNote";
import NotesService from "../service/Note";

export const Home = ({ filters }) => {
  const { data: notes = [], loading, error, getNotes, updateNote } = useNote();

  useEffect(() => {
    getNotes(filters);
  }, [filters]);

  if (loading) return <p>Cargando notas...</p>;
  if (error) return <p>Error al cargar notas: {error}</p>;

  const onSelect = async (id) => {
    const note = notes.find((n) => n.id === id);
    if (note) {
      await NotesService.updateNote(id, {
        ...note,
        isCompleted: !note.isCompleted,
      });
      getNotes(filters);
    }
  };

  // Maneja el estado de importancia de la nota
  const handleToggleImportant = async (id) => {
    const note = notes.find((n) => n.id === id);
    if (note) {
      await updateNote(id, { ...note, isImportant: !note.isImportant });
    }
  };

  const handleDelete = async (id) => {
    const note = notes.find((n) => n.id === id);
    if (note) {
      try {
        await NotesService.deleteNote(id);
        await getNotes();
      } catch (error) {
        console.error("Error al eliminar nota:", error);
      }
    }
  };

  return (
    <div>
      <NoteList
        notes={notes}
        onToggleComplete={onSelect}
        onToggleImportant={handleToggleImportant}
        onDelete={handleDelete}
      />
      {/* <TrashButton
        onDelete={deleteNote}
        notesToDelete={notesToDelete}
      ></TrashButton> */}
    </div>
  );
};
