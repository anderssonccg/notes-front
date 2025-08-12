import { FaStar, FaRegStar } from "react-icons/fa";
import style from "./StarIcon.module.css";

export const StarIcon = ({ important, onToggle }) => (
  <span className={style.starWrapper} onClick={onToggle}>
    {important ? (
      <FaStar className={`${style.star} ${style.important}`} />
    ) : (
      <FaRegStar className={`${style.star} ${style.notImportant}`} />
    )}
  </span>
);
