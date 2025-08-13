import style from "./NoteForm.module.css";

export const FormButtons = ({ navigate }) => {
  return (
    <div className={style.buttonContainer}>
      <button type="submit" className={style.button}>
        Guardar
      </button>
      <button
        type="button"
        className={style.button}
        onClick={() => navigate("/")}
      >
        Cancelar
      </button>
    </div>
  );
};
