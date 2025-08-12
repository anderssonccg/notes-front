import style from "./fonts.module.css";

export const FontBar = ({ name, font_family, addFont }) => {
  return (
    <div
      className={style.font}
      style={{ fontFamily: font_family }}
      onClick={() => {
        addFont(font_family);
      }}
    >
      {name}
    </div>
  );
};
