import React from "react";
import styles from "./SearchSection.module.css"

export const SearchSection = () => {
  return (
    <div className={styles.SearchSectionContent}>
      <h2 className={styles.title}>Pesquisar</h2>
      <input type="text" className={styles.input}/>
    </div>
  );
};
