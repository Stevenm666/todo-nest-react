import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import AddTaskSeeker from './components/AddTaskSeeker'
import ListTasks from './components/ListTasks'

function App() {

  return (
    <>
    <NavBar />
    <AddTaskSeeker />
    <ListTasks />
    </>
  )
}

export default App
