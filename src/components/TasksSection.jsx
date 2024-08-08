import React from 'react'
import styles from './TasksSection.module.css'

export const TasksSection = ({tasks,deleteTask}) => {
  return (
    <div className={styles.TasksSectionContent}>
        {tasks.map((element,index) => {
            return (
                <div className={styles.divTask}>
                    <span>{element.name}</span>
                    <div>
                        <button className={styles.conclude}>Concluída</button>
                        <button className={styles.delete} onClick={() => deleteTask(index)}>x</button>
                    </div>
                </div>
            )
        })}
    </div>
  )
}
