import React from 'react'
import { useState } from 'react'
import "./App.css"
import { SearchSection } from './components/SearchSection'
import { FilterSection } from './components/FilterSection'
import { TasksSection } from './components/TasksSection'

const App = () => {
  const [tasks,setTasks] = useState([
    {
      name: 'Estudar'
    },

    {
      name: 'Trabalhar'
    }
  ])
  
  return (
    <main>
      <h1>Lista de Tarefas</h1>
      <SearchSection/>
      <FilterSection/>
      <TasksSection tasks={tasks}/>
      
    </main>
  )
}

export default App
