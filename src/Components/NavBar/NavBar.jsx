import React, { useState } from "react";
import styles from "./NavBar.module.css";
import { useNavigate } from "react-router-dom";

export const NavBar = ({ filterNotes, tags }) => {
  const [option, setOption] = useState("");
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleSetOption = (newOption) => {
    setOption(newOption);
    setIsOpen(!isOpen);
    filterNotes(search, newOption);
  };

  const handleSetSearch = (newSearch) => {
    setSearch(newSearch);
    filterNotes(newSearch, option);
  };

  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>NOTAS</h1>

      <input
        type="text"
        placeholder="Buscar notas"
        className={styles.search}
        onChange={(e) => handleSetSearch(e.target.value)}
      />
      <div className={styles.buttonContainer}>
        <div className={styles.dropdown}>
          <button onClick={toggleDropdown} className={styles.filterBtn}>
            {option ? option : "▼ Filtrar por"}
          </button>
          {isOpen && (
            <ul className={styles.menu}>
              {option && (
                <li onClick={() => handleSetOption("")}>Quitar filtro</li>
              )}
              {Array.from(tags).map((tag, i) => (
                <li key={i} onClick={() => handleSetOption(tag)}>
                  {tag}
                </li>
              ))}
            </ul>
          )}
        </div>

        <button
          className={styles.newNoteBtn}
          onClick={() => navigate("/notes/create")}
        >
          ➕ Nueva nota
        </button>
      </div>
    </nav>
  );
};
