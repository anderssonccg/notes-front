import style from "./fonts.module.css";

export const FontBar = ({name, font_family}) => {
  return (
    <div className={style.font} style={{ fontFamily: font_family }}>{name}</div>
  )
}
