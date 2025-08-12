import { useState } from "react";
import style from "./NoteForm.module.css";
import { useNavigate } from "react-router-dom";
import { TitleField } from "./TitleField";
import { DescriptionField } from "./DescriptionField";
import { TagField } from "./TagField";
import { ImportantCheck } from "./ImportantCheck";
import { FormButtons } from "./FormButtons";

export const NoteForm = ({ color, background, font, addNote }) => {
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
    addNote({
      title: title,
      description: description,
      tag: tag,
      isImportant: important,
      color: color,
      background: background,
      font: font,
    });
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

  return (
    <>
      <form
        className={style.container}
        style={noteStyle}
        onSubmit={handleSubmit}
      >
        <h1 className={style.title}>Nueva nota</h1>
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
          <TagField
            tag={tag}
            onChange={(e) => {
              setTag(e.target.value);
            }}
          />
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
