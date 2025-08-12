import style from "./NoteForm.module.css";

export const DescriptionField = ({ description, font, onChange }) => {
  return (
    <textarea
      className={style.descriptionField}
      placeholder="Descripcion"
      value={description}
      style={{ fontFamily: font }}
      onChange={onChange}
    ></textarea>
  );
};
