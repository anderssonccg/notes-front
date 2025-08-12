import { NoteForm } from "../Components/Notes/NoteForm";
import { Colors } from "../Components/Notes/Colors";
import { Fonts } from "../Components/Notes/Fonts";
import style from "../Styles/notes.module.css";
import { useState } from "react";

export const CreateNotes = ({ addNote }) => {
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
      />
      <Fonts addFont={addFont} />
    </div>
  );
};
