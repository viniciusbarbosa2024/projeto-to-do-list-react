import React from 'react'
import { useState } from 'react'
import "./App.css"
import { SearchSection } from './components/SearchSection'
import { FilterSection } from './components/FilterSection'

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
      
      <ul>
        <li>{tasks[0].name}</li>
        <li>{tasks[1].name}</li>
      </ul>
    </main>
  )
}

export default App
