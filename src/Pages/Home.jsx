import { NoteList } from "../Components/NoteList/NoteList";

export const Home = ({ notes, deleteNote }) => {
  return (
    <div>
      <NoteList notes={notes} onDelete={deleteNote} />
    </div>
  );
};
