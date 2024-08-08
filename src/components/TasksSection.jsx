import React from 'react'
import styles from './TasksSection.module.css'

export const TasksSection = ({tasks,deleteTask,concludeTask}) => {
    //Função para estilizar exibição do nome da tarefa
    function stylizeTaskName(index) {
        if (tasks[index].status == 'Concluída') {
            return styles.taskCompleted
        }
    }

    //Estilizar o botão de definir status da tarefa
    function stylizeCompletionButton(index) {
        if (tasks[index].status == 'Pendente') {
            return styles.conclude
        } else if (tasks[index].status == 'Concluída') {
            return styles.pendant
        }
    }

    //Definir se o botão de definir status vai exibir a opção de marcar tarefa como concluída ou como pendente
    function setStatusButton(index) {
        if (tasks[index].status == 'Pendente') {
            return 'Marcar como concluída'
        } else {
            return 'Marcar como pendente'
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
