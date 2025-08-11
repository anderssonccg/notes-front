
import { Colors } from "../Components/Notes/Colors"
import { Fonts } from "../Components/Notes/Fonts"
import style from "../Styles/notes.module.css"

export const CreateNotes = () => {
  return (
    <div className={style.notes_container}>
      <Colors />
      <Fonts />
      <NoteForm />
    </div>
  );
};
