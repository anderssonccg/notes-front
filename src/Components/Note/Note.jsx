import React, { useState } from "react";
import { StarIcon } from "./StarIcon";
import style from './Note.module.css'
export const Note = ({
  isComplete,
  title,
  isImportant,
  description,
  category,
  color,
  background,
  font,
}) => {
  const [check, setCheck] = useState(isComplete);

  const [important, setImportant] = useState(isImportant);

  const toggleImportant = () => {
    setImportant((prev) => !prev);
  };

  const toggleCheck = () => {
    setCheck((prev) => !prev);
  };

  return (
    <div className= {style.noteContainer} style={{
        backgroundColor: color,
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <div className= {style.noteHeader} >
        <input type="checkbox" checked={check} onChange={toggleCheck} className={style.noteCheckbox}/>
        <h1 style={{ fontFamily: font }}>{title}</h1>
        <StarIcon important={important} onToggle={toggleImportant} />
      </div>

      <div className= {style.noteDescription} >
          <p>{description}</p>
      </div>

      <div className={style.noteCategory}>
        <strong>{category}</strong>
      </div>
    </div>
  );
};
