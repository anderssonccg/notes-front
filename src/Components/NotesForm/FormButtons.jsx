import style from "./NoteForm.module.css";

export const FormButtons = ({ navigate, setEditingNote }) => {
  return (
    <div className={style.buttonContainer}>
      <button type="submit" className={style.button}>
        Guardar
      </button>
      <button
        type="button"
        className={style.button}
        onClick={() => {
          setEditingNote(null);
          navigate("/");
        }}
      >
        Cancelar
      </button>
    </div>
  );
};
