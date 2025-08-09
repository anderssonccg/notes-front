import React from "react";

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
  return <div>

    <input type="checkbox" checked={check} />
     <h1>{title}</h1>

  </div>;
};
