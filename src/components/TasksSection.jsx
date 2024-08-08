import React from 'react'
import styles from './TasksSection.module.css'

export const TasksSection = ({tasks,deleteTask,concludeTask}) => {
    //Função para estilizar exibição do nome da tarefa
    function stylizeTaskName(index) {
        if (tasks[index].status == 'Concluída') {
            return styles.taskCompleted
        }
    }

    function stylizeCompletionButton(index) {
        if (tasks[index].status == 'Pendente') {
            return styles.conclude
        }
    }

    //Definir se o botão de definir status vai exibir a opção de marcar tarefa como concluída ou como não concluída
    function setStatusButton(index) {
        if (tasks[index].status == 'Pendente') {
            return 'Concluída'
        } else {
            return 'Não Concluída'
        }
    }
  
    return (
    <div className={styles.TasksSectionContent}>
        {tasks.map((element,index) => {
            return (
                <div className={styles.divTask}>
                    <span className={stylizeTaskName(index)}>{element.name}</span>
                    <div>
                        <button className={stylizeCompletionButton(index)} onClick={()=> concludeTask(index)}>{setStatusButton(index)}</button>
                        <button className={styles.delete} onClick={() => deleteTask(index)}>x</button>
                    </div>
                </div>
            )
        })}
    </div>
  )
}
