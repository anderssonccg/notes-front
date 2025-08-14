import style from "./Error.module.css";

export const InfoError = () => {
  return (
    <div className={style.info_error}>
      <h1 class="titulo_error">Malas noticias</h1>
      <p>La pagina que buscas no existe.</p>
    </div>
  );
};
