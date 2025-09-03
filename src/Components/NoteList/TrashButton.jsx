import React from "react";
import { FcEmptyTrash, FcFullTrash } from "react-icons/fc";
import style from "./TrashButton.module.css";
export const TrashButton = ({}) => {
  const hasSelection = notesToDelete.length > 0;

  return (
    <div>
      <button
        className={style.floating_delete_btn}
        disabled={!hasSelection}
        onClick={() => onDelete(notesToDelete.map((n) => n.id))}
      >
        {hasSelection ? <FcFullTrash /> : <FcEmptyTrash />}
      </button>
    </div>
  );
};
