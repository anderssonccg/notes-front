import { useNavigate } from "react-router-dom";
import { NoteList } from "../Components/NoteList/NoteList";

export const Home = ({ notes, deleteNote }) => {
  const navigate = useNavigate();
  return (
    <div>
      {/* Hice este boton temporal mientras se mergea el navbar */}
      <button onClick={() => navigate("notes/create")}>Nueva nota</button>
      <NoteList notes={notes} onDelete={deleteNote} />
    </div>
  );
};
