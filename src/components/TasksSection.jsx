import React from "react";
import styles from "./TasksSection.module.css";

export const TasksSection = ({
  tasks,
  deleteTask,
  setTaskStatus,
  filter,
  search,
}) => {
  //Função para estilizar exibição do nome da tarefa
  function stylizeTaskName(index) {
    if (displayedTasks[index].status == "Concluída") {
      return styles.taskCompleted;
    }
  }

  //Estilizar o botão de definir status da tarefa
  function stylizeCompletionButton(index) {
    if (displayedTasks[index].status == "Pendente") {
      return styles.conclude;
    } else if (displayedTasks[index].status == "Concluída") {
      return styles.pendant;
    }
  }

  //Definir se o botão de definir status vai exibir a opção de marcar tarefa como concluída ou como pendente
  function setStatusButton(index) {
    if (tasks[index].status == "Pendente") {
      return "Marcar como concluída";
    } else {
      return "Marcar como pendente";
    }
  }

  //Função para definir o array de tarefas, considerando a aplicação dos filtros
  function getFilteredTaskArray() {
    if (filter == "") {
      return tasks;
    } else {
      return tasks.filter((element) => element.status == filter);
    }
  }

  //Função para definir o array de tarefas, considerando a pesquisa feita pelo usuário
  function searchInTasks(filteredTasks, search) {
    return filteredTasks.filter(
      (element) => element.name.toLowerCase().includes(search) === true
    );
  }

  //Função para definir as tarefas a serem exibidas
  function setArrayOfDisplayedTasks() {
    let filteredTasks = getFilteredTaskArray();
    let tasksAfterSearch = searchInTasks(filteredTasks, search);

    return tasksAfterSearch;
  }

  //Variável que contém o array com as tarefas filtradas
  let displayedTasks = setArrayOfDisplayedTasks();

  if (tasks.length == 0) {
    return <p className={styles.noTasks}>Ainda não há tarefas adicionadas</p>;
  } else {
    return (
      <div className={styles.TasksSectionContent}>
        {displayedTasks.map((element, index) => {
          return (
            <div className={styles.divTask}>
              <span className={stylizeTaskName(index)}>{element.name}</span>
              <div>
                <button
                  className={stylizeCompletionButton(index)}
                  onClick={() => setTaskStatus(index)}
                >
                  {setStatusButton(index)}
                </button>

                <button
                  className={styles.delete}
                  onClick={() => deleteTask(index)}
                >
                  x
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
};
