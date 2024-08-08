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
      name: 'Estudar'
    },

    {
      name: 'Trabalhar'
    },

    {
      name: 'Almoçar'
    },

    {
      name: 'Jantar'
    },
  ])
  
  function addTask(taskName) {
    setTasks([...tasks,{name: taskName}])
  }

  return (
    <main>
      <h1>Lista de Tarefas</h1>
      <SearchSection/>
      <FilterSection/>
      <TasksSection tasks={tasks}/>
      <CreateTask addTask={addTask}/>
      
    </main>
  )
}

export default App
