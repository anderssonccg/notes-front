import { NoteForm } from "../Components/NotesForm/NoteForm";
import { Colors } from "../Components/NotesForm/Colors";
import { Fonts } from "../Components/NotesForm/Fonts";
import style from "../Styles/notes.module.css";
import { useState } from "react";

export const CreateNotes = ({ addNote, updateNote, noteToEdit, tags }) => {
  const [color, setColor] = useState("#d3c1ad");
  const [background, setBackground] = useState("");
  const [font, setFont] = useState("");

  const addColor = (newColor) => {
    setColor(newColor);
  };

  const addBackground = (newBackground) => {
    setBackground(newBackground);
  };

  const addFont = (newFont) => {
    setFont(newFont);
  };

  return (
    <div className={style.notes_container}>
      <Colors addColor={addColor} addBackground={addBackground} />
      <NoteForm
        color={color}
        background={background}
        font={font}
        addNote={addNote}
        updateNote={updateNote}
        noteToEdit={noteToEdit}
        tags={tags}
      />
      <Fonts addFont={addFont} />
    </div>
  );
};
