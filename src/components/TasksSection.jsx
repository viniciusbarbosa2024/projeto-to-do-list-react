import React from 'react'
import styles from './TasksSection.module.css'

export const TasksSection = ({tasks}) => {
  return (
    <div className={styles.TasksSectionContent}>
        {tasks.map(element => {
            return (
                <div className={styles.divTask}>
                    <span>{element.name}</span>
                    <div>
                        <span className={styles.conclude}>Concluída</span>
                        <span className={styles.delete}>x</span>
                    </div>
                </div>
            )
        })}
    </div>
  )
}
