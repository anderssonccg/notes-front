import { useNavigate } from "react-router-dom";
import { NoteList } from "../Components/NoteList/NoteList";

export const Home = ({ notes, setNotes ,deleteNote }) => {
  const navigate = useNavigate();
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
      {/* Hice este boton temporal mientras se mergea el navbar */}
      <button onClick={() => navigate("notes/create")}>Nueva nota</button>
      <NoteList
        notes={sortedNotes}
        onDelete={deleteNote}
        onToggleComplete={handleToggleComplete}
        onToggleImportant={handleToggleImportant}
      />
    </div>
  );
};
