import React, { useState } from "react";
import styles from "./FilterSection.module.css"

export const FilterSection = ({getFilter}) => {
  
  function sendFilter(e) {
    getFilter(e.target.value)
  }
  
  return (
    <div className={styles.FilterSectionContent}>
      <h2 className={styles.title}>Filtrar</h2>
      <select className={styles.select} onChange={sendFilter}>
        <option value="">Todos</option>
        <option value="Concluída">Concluídos</option>
        <option value="Pendente">Pendentes</option>
      </select>
    </div>
  );
};
