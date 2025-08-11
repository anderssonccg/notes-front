import { FontBar } from "./FontBar";
import style from "./fonts.module.css";

export const listOfFonts = [
  { name: "Poppins", font_family: "'Poppins', sans-serif" },
  { name: "Times New Roman", font_family: "'Times New Roman', serif" },
  { name: "Cursive", font_family: "cursive" },
  { name: "Caveat", font_family: "'Caveat', cursive" },
  { name: "Averia Serif Libre", font_family: "'Averia Serif Libre', serif" },
  { name: "Roboto Mono", font_family: "'Roboto Mono', monospace" },
  { name: "Recursive", font_family: "'Recursive', sans-serif" },
  { name: "Archivo Narrow", font_family: "'Archivo Narrow', sans-serif" },
];

export const Fonts = () => {
    return (
        <div className={style.container}>
            <h5>Fuente</h5>
            <section className={style.fonts_container}>
                {listOfFonts.map((font, i) => {
                    return (
                        <FontBar
                            key={i}
                            name={font.name}
                            font_family={font.font_family}
                        />
                    );
                })}
            </section>
        </div>
    )
}
