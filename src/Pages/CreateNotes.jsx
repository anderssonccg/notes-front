import { NoteForm } from "../Components/NotesForm/NoteForm";
import { Colors } from "../Components/NotesForm/Colors";
import { Fonts } from "../Components/NotesForm/Fonts";
import style from "../Styles/notes.module.css";
import { useState } from "react";
import { useNote } from "../hook/useNote";

export const CreateNotes = () => {
  const [color, setColor] = useState("#d3c1ad");
  const [background, setBackground] = useState("");
  const [font, setFont] = useState("");

  const { createNote } = useNote(); // 👈 usamos el hook

  const addColor = (newColor) => setColor(newColor);
  const addBackground = (newBackground) => setBackground(newBackground);
  const addFont = (newFont) => setFont(newFont);

  // Esta función se pasa al formulario
  const handleAddNote = async (noteData) => {
    const newNote = {
      ...noteData,
      color,
      background,
      font,
    };
    await createNote(newNote);
  };

  return (
    <div className={style.notes_container}>
      <Colors addColor={addColor} addBackground={addBackground} />

      <NoteForm
        addColor={addColor}
        addBackground={addBackground}
        addFont={addFont}
        color={color}
        background={background}
        font={font}
        addNote={handleAddNote}   // 👈 ahora está conectado
        tags={[]}                 // ya le pasas tus tags si los tienes
      />

      <Fonts addFont={addFont} />
    </div>
  );
};
