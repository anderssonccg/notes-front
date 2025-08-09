import { StarIcon } from "./StarIcon";
import style from "./Note.module.css";
export const Note = ({
  isComplete,
  title,
  isImportant,
  description,
  category,
  color,
  background,
  font,
  handleToggleComplete,
  // onDelete,
  // onEdit,
  handleToggleImportant
}) => {

  return (
    <div
      className={style.noteContainer}
      style={{
        backgroundColor: color,
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className={style.noteHeader}>
        <input
          type="checkbox"
          checked={isComplete}
          onChange={handleToggleComplete}
          className={style.noteCheckbox}
        />
        <h1 style={{ fontFamily: font }}>{title}</h1>
        <StarIcon important={isImportant} onToggle={handleToggleImportant} />
      </div>

      <div className={style.noteDescription}>
        <p>{description}</p>
      </div>

      <div className={style.noteCategory}>
        <strong>{category}</strong>
      </div>
    </div>
  );
};
