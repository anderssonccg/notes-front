import { NoteList } from "../Components/NoteList/NoteList";

export const Home = ({ notes, setNotes ,deleteNote, onEdit }) => {
  // Ordena: importantes primero
  const sortedNotes = [...notes].sort((a, b) => {
    if (a.isImportant === b.isImportant) return 0;
    return a.isImportant ? -1 : 1;
  });
  // Maneja si la nota está completa o seleccionada
  const handleToggleComplete = (id) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id ? { ...note, isComplete: !note.isComplete } : note
      )
    );
  };
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
        onToggleComplete={handleToggleComplete}
        onToggleImportant={handleToggleImportant}
      />
    </div>
  );
};
