import style from "./NoteForm.module.css";
import { FaRegStar, FaStar } from "react-icons/fa";

export const ImportantCheck = ({ important, onClick }) => {
  return (
    <span className={style.label}>
      Marcar como importante
      {important ? (
        <FaStar className={style.checkedStar} onClick={onClick} />
      ) : (
        <FaRegStar className={style.star} onClick={onClick} />
      )}
    </span>
  );
};
