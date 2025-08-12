import {
  RiCheckboxBlankCircleLine,
  RiCheckboxCircleFill,
} from "react-icons/ri";
import { StarIcon } from "./StarIcon";
import style from "./Note.module.css";
export const Note = ({
  isComplete,
  title,
  isImportant,
  description,
  tag,
  color,
  background,
  font,
  handleToggleComplete,
  // onDelete,
  // onEdit,
  handleToggleImportant,
}) => {
  // Aplica el color con opacidad sobre la imagen de fondo
  const noteStyle = {
    background: background
      ? `linear-gradient(${color}66, ${color}66), url(${background})`
      : color,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div className={style.noteContainer} style={{ ...noteStyle }}>
      <div className={style.noteHeader}>
        <span
          className={style.noteCheckbox}
          onClick={handleToggleComplete}
          style={{ cursor: "pointer" }}
          title={isComplete ? "Desmarcar" : "Marcar como completada"}
        >
          {isComplete ? (
            <RiCheckboxCircleFill size={25}/>
          ) : (
            <RiCheckboxBlankCircleLine size={25} />
          )}
        </span>
        <h1 style={{ fontFamily: font }}>{title}</h1>
        <StarIcon important={isImportant} onToggle={handleToggleImportant} />
      </div>

      <div className={style.noteDescription}>
        <p style={{ fontFamily: font }}>{description}</p>
      </div>

      <div className={style.noteCategory}>
        <strong>{tag}</strong>
      </div>
    </div>
  );
};
