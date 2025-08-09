import { FaStar } from "react-icons/fa"; // estrella llena
import { CiStar } from "react-icons/ci"; // estrella vacía
import "./StarIcon.module.css";

export const StarIcon = ({ important, onToggle }) => {
  return (
    <div
      onClick={onToggle}
      className={`star-wrapper ${important ? "important" : ""}`}
    >
      {important ? <FaStar className="star" /> : <CiStar className="star" />}
    </div>
  );
};
