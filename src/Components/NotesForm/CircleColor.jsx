import style from "./colors.module.css";

export const CircleColor = ({ color, addColor }) => {
  return (
    <div
      className={style.circle}
      style={{ background: color }}
      onClick={() => {
        addColor(color);
      }}
    />
  );
};
