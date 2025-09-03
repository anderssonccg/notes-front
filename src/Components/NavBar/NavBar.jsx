import React, { useEffect, useState } from "react";
import styles from "./NavBar.module.css";
import { useNavigate } from "react-router-dom";
import { useTag } from "../../hook/useTag";

export const NavBar = ({ onFilterChange }) => {
  const [option, setOption] = useState("");   
  const [search, setSearch] = useState("");   
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const { data: tags = [] } = useTag(); 

  const toggleDropdown = () => setIsOpen((v) => !v);

  const handleSetOption = (newOption) => {
    setOption(newOption);          
    setIsOpen(false);               
    onFilterChange((prev) => ({
      ...prev,
      tagName: newOption,      
    }));
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    onFilterChange((prev) => ({ ...prev, search: value }));
  };

  useEffect(() => {
    const filters = {};
    if (option?.tagName) filters.tagName = option.tagName;
    if (search) filters.search = search;
    onFilterChange(filters);
  }, [option, search]);

  return (
     <nav className={styles.navbar}>
      <h1 className={styles.logo}>NOTAS</h1>

      <input
        type="text"
        placeholder="Buscar notas"
        className={styles.search}
        value={search}
        onChange={handleSearch}
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
                <li key={i} onClick={() => handleSetOption(tag.tagName)}>
                  {tag.tagName}
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
