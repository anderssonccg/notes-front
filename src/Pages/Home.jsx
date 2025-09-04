import { useEffect, useState } from "react";
import { NoteList } from "../Components/NoteList/NoteList";
import { NoteForm } from "../Components/NotesForm/NoteForm";
import { useNote } from "../hook/useNote";
import NotesService from "../service/Note";
import { useNavigate } from "react-router-dom";

export const Home = ({ filters }) => {
  const {
    data: notes = [],
    loading,
    error,
    getNotes,
    updateNote,
    createNote,
  } = useNote();
  const [noteToEdit, setEditingNote] = useState(null); // 👈 estado para editar
  const navigate = useNavigate();
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

  const handleEdit = (note) => {
    setEditingNote(note); // ✅ solo lógica normal
    navigate("/notes/create", {
      // ✅ pasamos la nota al formulario con state
      state: { note },
    });
  };

  return (
    <div>
      {/* Lista de notas */}
      <NoteList
        notes={notes}
        onToggleComplete={onSelect}
        onToggleImportant={handleToggleImportant}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  );
};
