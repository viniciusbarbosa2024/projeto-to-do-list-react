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
  
  function addTask(taskName) {
    setTasks([...tasks,{name: taskName}])
  }

  function deleteTask(index) {
    let newTaskList = [...tasks]
    newTaskList.splice(index,1)

    setTasks(newTaskList)
  }

  function concludeTask(index) {
    let newTaskList = [...tasks]
    newTaskList[index].status = 'Concluída'

    setTasks(newTaskList)
  }

  return (
    <main>
      <h1>Lista de Tarefas</h1>
      <SearchSection/>
      <FilterSection/>
      <TasksSection tasks={tasks} deleteTask={deleteTask} concludeTask={concludeTask}/>
      <CreateTask addTask={addTask}/>
      
    </main>
  )
}

export default App
