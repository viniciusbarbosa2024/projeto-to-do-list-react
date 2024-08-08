import React from "react";
import styles from "./FilterSection.module.css"

export const FilterSection = () => {
  return (
    <div className={styles.FilterSectionContent}>
      <h2 className={styles.title}>Filtrar</h2>
      <select className={styles.select}>
        <option value="">Todos</option>
        <option value="Concluída">Concluídos</option>
        <option value="Pendente">Pendentes</option>
      </select>
    </div>
  );
};
