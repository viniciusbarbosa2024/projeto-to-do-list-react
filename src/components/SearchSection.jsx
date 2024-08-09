import React from "react";
import styles from "./SearchSection.module.css"

export const SearchSection = ({getValueFromSearchInput}) => {
  
  //Função para enviar o value do input de pesquisa para o componente App
  function sendInputValue(e) {
    getValueFromSearchInput(e.target.value)
  }
  
  return (
    <div className={styles.SearchSectionContent}>
      <h2 className={styles.title}>Pesquisar</h2>
      <input type="text" className={styles.input} onChange={sendInputValue}/>
    </div>
  );
};
