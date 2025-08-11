import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import styles from "./StarIcon.module.css";

export const StarIcon = ({ important, onToggle }) => {
  return (
    <div
      onClick={onToggle}
      className={`${styles.starWrapper} ${important ? styles.important : ""}`}
    >
      {important ? <FaStar className={styles.star} /> : <CiStar className={styles.star} />}
    </div>
  );
};
