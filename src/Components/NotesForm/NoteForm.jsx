import { useEffect, useState } from "react";
import style from "./NoteForm.module.css";
import { useNavigate } from "react-router-dom";
import { TitleField } from "./TitleField";
import { DescriptionField } from "./DescriptionField";
import { TagField } from "./TagField";
import { ImportantCheck } from "./ImportantCheck";
import { FormButtons } from "./FormButtons";
import { TagComboBox } from "./TagComboBox";

export const NoteForm = ({
  addColor,
  addBackground,
  addFont,
  color,
  background,
  font,
  addNote,
  updateNote,
  setEditingNote,
  noteToEdit,
  tags,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("");
  const [important, setImportant] = useState(false);
  const [missingTitle, setMissingTitle] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title) {
      setMissingTitle(true);
      return;
    }

    const noteData = {
      title,
      description: description || null,
      isImportant: important,
      tagName: tag,
      userId: 1, // temporal
      colorId: 1,
      backgroundId: 1,
      fontId: 1,
    };

    if (noteToEdit) {
      await updateNote({ ...noteData, id: noteToEdit.id });
    } else {
      await addNote(noteData);
    }

    setTitle("");
    setDescription("");
    setTag("");
    setImportant(false);
    navigate("/");
  };

  const handleMissingTitle = () => {
    if (!title) {
      setMissingTitle(true);
    } else {
      setMissingTitle(false);
    }
  };

  const noteStyle = {
    background: background
      ? `linear-gradient(${color}66, ${color}66), url(${background})`
      : color,
  };

  useEffect(() => {
    if (noteToEdit) {
      addColor(noteToEdit.color || "");
      addBackground(noteToEdit.background || "");
      addFont(noteToEdit.font || "");
      setTitle(noteToEdit.title || "");
      setDescription(noteToEdit.description || "");
      setTag(noteToEdit.tag || "");
      setImportant(noteToEdit.isImportant || false);
    }
  }, [noteToEdit]);

  return (
    <>
      <form
        className={style.container}
        style={noteStyle}
        onSubmit={handleSubmit}
      >
        <h1 className={style.title}>
          {noteToEdit ? "Editar nota" : "Nueva nota"}
        </h1>
        <TitleField
          title={title}
          missingTitle={missingTitle}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          onBlur={handleMissingTitle}
          font={font}
        />
        <DescriptionField
          description={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          font={font}
        />
        <div className={style.tagContainer}>
          {noteToEdit ? (
            <TagComboBox
              tag={tag}
              onChange={(e) => {
                setTag(e.target.value);
              }}
              options={Array.from(tags)}
            />
          ) : (
            <TagField
              tag={tag}
              onChange={(e) => {
                setTag(e.target.value);
              }}
            />
          )}
          <ImportantCheck
            important={important}
            onClick={() => {
              setImportant(!important);
            }}
          />
        </div>
        <FormButtons navigate={navigate} setEditingNote={setEditingNote} />
      </form>
    </>
  );
};
