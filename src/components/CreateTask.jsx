import React from 'react'
import { useState } from 'react'
import styles from './CreateTask.module.css'

export const CreateTask = ({addTask}) => {
    const [taskName,setTaskName] = useState('')
  
    function updateTaskName(e) {
        setTaskName(e.target.value)
    }

    return (
    <div className={styles.CreateTaskContent}>
        <h2 className={styles.title}>Criar Tarefa</h2>
        <input type="text" className={styles.input} onChange={updateTaskName}/>
        <button className={styles.button} onClick={()=> addTask(taskName)}>Criar tarefa</button>
    </div>
  )
}
