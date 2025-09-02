import { NoteList } from "../Components/NoteList/NoteList";
import { TrashButton } from "../Components/NoteList/TrashButton";
import { useNote } from "../hook/useNote";

export const Home = ({
  deleteNote,
  onEdit,
  onSelect,
  notesToDelete,
}) => {

  const { data: notes = [], loading, error, getNotes } = useNote();

  // Ordena: importantes primero
  const sortedNotes = [...notes].sort((a, b) => {
    if (a.isImportant === b.isImportant) return 0;
    return a.isImportant ? -1 : 1;
  });

  // Maneja el estado de importancia de la nota
  const handleToggleImportant = async (id) => {
    const note = notes.find((n) => n.id === id);
    if (note) {
      await updateNote(id, { ...note, isImportant: !note.isImportant });
    }
  };

  if (loading) return <p>Cargando notas...</p>;
  if (error) return <p>Error al cargar notas: {error.message}</p>;  

  return (
    <div>
      <NoteList
        notes={sortedNotes}
        onDelete={deleteNote}
        onEdit={onEdit}
        onToggleComplete={onSelect}
        onToggleImportant={handleToggleImportant}
      />
      <TrashButton
        onDelete={deleteNote}
        notesToDelete={notesToDelete}
      ></TrashButton>
    </div>
  );
};
