import style from "./Error.module.css";
import { InfoError } from "./InfoError";
import { ImageError } from "./ImageError";
import { Boton } from "./Boton";

export const Error = () => {
  return (
    <div className={style.contenedor}>
      <div className={style.contenido}>
        <ImageError />
        <div className={style.texto_contenido}>
          <InfoError />
          <Boton />
        </div>
      </div>
    </div>
  );
};