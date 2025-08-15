import style from "./Error.module.css";

export const ImageError = () => {
  return (
    <img
      className={style.no_encontrado}
      src="https://cdn-icons-png.flaticon.com/512/868/868804.png"
      alt="Imagen de error 404"
    />
  );
};
