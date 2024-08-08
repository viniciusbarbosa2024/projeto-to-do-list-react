import React from 'react'
import { useState } from 'react'
import styles from './CreateTask.module.css'

export const CreateTask = ({addTask}) => {
    const [taskName,setTaskName] = useState('')
  
    function updateTaskName(e) {
        setTaskName(e.target.value)
    }

    function clearInputAndAddTask() {
        setTaskName('')
        addTask(taskName)
    }

    return (
    <div className={styles.CreateTaskContent}>
        <h2 className={styles.title}>Criar Tarefa</h2>
        <input type="text" className={styles.input} onChange={updateTaskName} value={taskName}/> 
        {/* Anotar sobre o value direto no input */}
        <button className={styles.button} onClick={clearInputAndAddTask}>Criar tarefa</button>
    </div>
  )
}
