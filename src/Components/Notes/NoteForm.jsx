import { useState } from "react";
import style from "./NoteForm.module.css";
import { FaRegStar, FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

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

  return (
    <>
      <form
        className={style.container}
        style={{
          background: background
            ? `linear-gradient(${color}66, ${color}66), url(${background})`
            : color,
        }}
        onSubmit={handleSubmit}
      >
        <h1 className={style.title}>Nueva nota</h1>
        <input
          className={!missingTitle ? style.field : style.errorField}
          type="text"
          style={{ fontFamily: font }}
          value={title}
          placeholder={
            !missingTitle ? "Titulo" : " ❌ Debe proporcionar un titulo"
          }
          onBlur={handleMissingTitle}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          className={style.descriptionField}
          placeholder="Descripcion"
          value={description}
          style={{ fontFamily: font }}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        ></textarea>
        <div className={style.tagContainer}>
          <input
            className={style.field}
            type="text"
            placeholder="Categoria"
            value={tag}
            onChange={(e) => {
              setTag(e.target.value);
            }}
          />
          <span className={style.label}>
            Marcar como importante
            {important ? (
              <FaStar
                className={style.checkedStar}
                onClick={() => {
                  setImportant(!important);
                }}
              />
            ) : (
              <FaRegStar
                className={style.star}
                onClick={() => {
                  setImportant(!important);
                }}
              />
            )}
          </span>
        </div>
        <div className={style.buttonContainer}>
          <button type="submit" className={style.button}>
            Guardar
          </button>
          <button className={style.button} onClick={() => navigate("/")}>
            Cancelar
          </button>
        </div>
      </form>
    </>
  );
};
