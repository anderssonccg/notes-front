import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { NoteForm } from "../Components/NotesForm/NoteForm";
import { Colors } from "../Components/NotesForm/Colors";
import { Fonts } from "../Components/NotesForm/Fonts";
import style from "../Styles/notes.module.css";
import { useNote } from "../hook/useNote";

export const CreateNotes = () => {
  const [color, setColor] = useState("#d3c1ad");
  const [background, setBackground] = useState("");
  const [font, setFont] = useState("");

  const location = useLocation();
  const noteToEdit = location.state?.note || null; // 👈 recuperamos la nota enviada desde Home

  const { createNote, updateNote } = useNote();

  const addColor = (newColor) => setColor(newColor);
  const addBackground = (newBackground) => setBackground(newBackground);
  const addFont = (newFont) => setFont(newFont);

  // Cuando cargue una nota a editar, asignamos sus estilos
  useEffect(() => {
    if (noteToEdit) {
      setColor(noteToEdit.color || "#d3c1ad");
      setBackground(noteToEdit.background || "");
      setFont(noteToEdit.font || "");
    }
  }, [noteToEdit]);

  const handleAddNote = async (noteData) => {
    const newNote = {
      ...noteData,
      color,
      background,
      font,
    };
    await createNote(newNote);
  };

  const handleUpdateNote = async (noteData) => {
    const { id, ...rest } = noteData;
    const updatedNote = {
      ...rest,
      color,
      background,
      font,
    };
    await updateNote(id, updatedNote);
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
        addNote={handleAddNote}
        updateNote={handleUpdateNote}
        noteToEdit={noteToEdit} // 👈 aquí pasamos la nota a editar
        tags={[]} // Aquí luego deberías pasar tus tags reales
      />

      <Fonts addFont={addFont} />
    </div>
  );
};
