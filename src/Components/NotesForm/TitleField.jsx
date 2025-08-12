import style from "./NoteForm.module.css";

export const TitleField = ({ title, missingTitle, onBlur, onChange, font }) => {
  return (
    <input
      className={!missingTitle ? style.field : style.errorField}
      type="text"
      style={{ fontFamily: font }}
      value={title}
      placeholder={!missingTitle ? "Titulo" : " ❌ Debe proporcionar un titulo"}
      onBlur={onBlur}
      onChange={onChange}
    />
  );
};
