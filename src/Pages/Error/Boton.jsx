import { Link } from "react-router-dom";
import style from "./Error.module.css";

export const Boton = () => {
  return (
    <Link className={style.boton_back} to="/">Back to Home</Link>
  );
};