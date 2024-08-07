import React from 'react'
import { useState } from 'react'
import "./App.css"
import { SearchSection } from './components/SearchSection'

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

      <h2>Filtrar</h2>
      <select name="" id=""></select>

      <ul>
        <li>{tasks[0].name}</li>
        <li>{tasks[1].name}</li>
      </ul>
    </main>
  )
}

export default App
