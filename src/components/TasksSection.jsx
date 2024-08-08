import React from 'react'
import styles from './TasksSection.module.css'

export const TasksSection = ({tasks,deleteTask,setTaskStatus,filter}) => {
    //Função para estilizar exibição do nome da tarefa
    function stylizeTaskName(index) {
        if (filteredTasks[index].status == 'Concluída') {
            return styles.taskCompleted
        }
    }

    //Estilizar o botão de definir status da tarefa
    function stylizeCompletionButton(index) {
        if (filteredTasks[index].status == 'Pendente') {
            return styles.conclude
        } else if (filteredTasks[index].status == 'Concluída') {
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

    function getFilteredTaskArray() {
        if (filter == '') {
            return tasks
        } else {
            return (
            tasks.filter((element) => element.status == filter)
            )
        }
    }

    let filteredTasks = getFilteredTaskArray()
  
    return (
    <div className={styles.TasksSectionContent}>
        {filteredTasks.map((element,index) => {
            return (                
                <div className={styles.divTask}> 
                    <span className={stylizeTaskName(index)}>
                        {element.name}
                    </span>
                    <div>
                        <button className={stylizeCompletionButton(index)} onClick={()=> setTaskStatus(index)}>

                            {setStatusButton(index)}
                            
                        </button>

                        <button className={styles.delete} onClick={() => deleteTask(index)}>x</button>
                    </div>
                </div>
            )
        })}
    </div>
  )
}
