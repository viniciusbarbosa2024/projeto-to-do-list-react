import React from 'react'
import styles from './CreateTask.module.css'

export const CreateTask = () => {
  return (
    <div className={styles.CreateTaskContent}>
        <h2 className={styles.title}>Criar Tarefa</h2>
        <input type="text" className={styles.input}/>
        <button className={styles.button}>Criar tarefa</button>
    </div>
  )
}
