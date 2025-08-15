import { NoteList } from "../Components/NoteList/NoteList";
import { TrashButton } from "../Components/NoteList/TrashButton";

export const Home = ({
  notes,
  setNotes,
  deleteNote,
  onEdit,
  onSelect,
  notesToDelete,
}) => {
  // Ordena: importantes primero
  const sortedNotes = [...notes].sort((a, b) => {
    if (a.isImportant === b.isImportant) return 0;
    return a.isImportant ? -1 : 1;
  });
  // Maneja el estado de importancia de la nota
  const handleToggleImportant = (id) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, isImportant: !note.isImportant } : note
      )
    );
  };
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
