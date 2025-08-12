import style from "./NoteForm.module.css";

export const TagField = ({ tag, onChange }) => {
  return (
    <input
      className={style.field}
      type="text"
      placeholder="Categoria"
      value={tag}
      onChange={onChange}
    />
  );
};
