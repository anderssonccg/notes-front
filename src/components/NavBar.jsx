import React, { useState } from "react";
import styles from "./NavBar.module.css";
import { useNavigate } from "react-router-dom";

export const NavBar = ({ filterNotes }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>NOTAS</h1>

      <input
        type="text"
        placeholder="Buscar notas"
        className={styles.search}
        onChange={filterNotes}
      />
      <div className={styles.buttonContainer}>
        <div className={styles.dropdown}>
          <button onClick={toggleDropdown} className={styles.filterBtn}>
            ▼ Filtrar por
          </button>

          {isOpen && (
            <ul className={styles.menu}>
              <li>Hogar</li>
              <li>Universidad</li>
              <li>Diario</li>
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
