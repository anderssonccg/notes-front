import style from "./colors.module.css";

export const CircleBackground = ({ background, addBackground }) => {
  return (
    <div
      className={style.circle}
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      onClick={() => {
        addBackground(background);
      }}
    />
  );
};
