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
  color,
  background,
  font,
  addNote,
  updateNote,
  noteToEdit,
  tags,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState("");
  const [important, setImportant] = useState(false);
  const [missingTitle, setMissingTitle] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) {
      setMissingTitle(true);
      return;
    }
    const noteData = {
      title,
      description,
      tag,
      isImportant: important,
      color,
      background,
      font,
    };
    if (noteToEdit) {
      console.log("noteToEdit ID:", noteToEdit.id);
      updateNote({ ...noteData, id: noteToEdit.id });
    } else {
      addNote(noteData);
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
        <FormButtons navigate={navigate} />
      </form>
    </>
  );
};
