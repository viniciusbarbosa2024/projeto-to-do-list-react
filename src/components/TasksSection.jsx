import React from 'react'
import styles from './TasksSection.module.css'

export const TasksSection = ({tasks,deleteTask,concludeTask}) => {
    function stylizeTask(index) {
        if (tasks[index].status == 'Concluída') {
            return styles.taskCompleted
        }
    }
  
    return (
    <div className={styles.TasksSectionContent}>
        {tasks.map((element,index) => {
            return (
                <div className={styles.divTask}>
                    <span className={stylizeTask(index)}>{element.name}</span>
                    <div>
                        <button className={styles.conclude} onClick={()=> concludeTask(index)}>Concluída</button>
                        <button className={styles.delete} onClick={() => deleteTask(index)}>x</button>
                    </div>
                </div>
            )
        })}
    </div>
  )
}
