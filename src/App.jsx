import React from 'react'
import { useState } from 'react'
import "./App.css"
import { SearchSection } from './components/SearchSection'
import { FilterSection } from './components/FilterSection'
import { TasksSection } from './components/TasksSection'
import { CreateTask } from './components/CreateTask'

const App = () => {
  const [tasks,setTasks] = useState([
    {
      name: 'Estudar',
      status: 'Pendente'
    },

    {
      name: 'Trabalhar',
      status: 'Concluída'
    },

    {
      name: 'Almoçar',
      status: 'Pendente'
    },

    {
      name: 'Jantar',
      status: 'Pendente'
    },
  ])
  
  //Função para adicionar tarefas
  function addTask(taskName) {
    setTasks([...tasks,{name: taskName,status: 'Pendente'}])
  }

  //Função para deletar tarefas
  function deleteTask(index) {
    let newTaskList = [...tasks]
    newTaskList.splice(index,1)

    setTasks(newTaskList)
  }

  //Função para definir o status da tarefa (Concluída ou pendente)
  function setTaskStatus(index) {
    let newTaskList = [...tasks]

    if (newTaskList[index].status == 'Pendente') {
      newTaskList[index].status = 'Concluída'

      setTasks(newTaskList)
    } else if (newTaskList[index].status == 'Concluída') {
      newTaskList[index].status = 'Pendente'

      setTasks(newTaskList)
    }

    
  }

  return (
    <main>
      <h1>Lista de Tarefas</h1>
      <SearchSection/>
      <FilterSection/>
      <TasksSection tasks={tasks} deleteTask={deleteTask} setTaskStatus={setTaskStatus}/>
      <CreateTask addTask={addTask}/>
      
    </main>
  )
}

export default App
