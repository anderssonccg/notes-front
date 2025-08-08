import React, { useState } from "react";
import styles from "./NavBar.module.css";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <nav className={styles.navbar}>
      <h1 className={styles.logo}>NOTAS</h1>

      <input type="text" placeholder="Bucar notas" className={styles.search} />

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

      <button className={styles.newNoteBtn}>➕ Nueva nota</button>
    </nav>
  );
}

export default NavBar;
