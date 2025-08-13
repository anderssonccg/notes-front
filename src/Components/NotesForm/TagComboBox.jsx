import React from "react";
export const TagComboBox = ({ tag, onChange, options }) => {
  return (
    <div>
      <label htmlFor="tag">Etiqueta:</label>
      <input
        list="tag-options"
        id="tag"
        name="tag"
        value={tag}
        onChange={onChange}
        placeholder="Escribe o selecciona una categoría"
      />
      <datalist id="tag-options">
        {options.map((opt, index) => (
          <option key={index} value={opt} />
        ))}
      </datalist>
    </div>
  );
};
