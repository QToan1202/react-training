import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Welcome from './components/Welcome'
import Comment from './components/Comment'
import Clock from './components/Clock'
import Dialog from './components/Dialog'
import Menu from './components/Menu'
import Task from './components/Task'
import './App.css'

function App() {

  return (
    <div>
      <Clock />
      <Welcome name="Toan" />
      <Comment userName="React" content="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
      <Dialog />
      <Menu />
      <Task />
    </div>
  )
}

export default App
