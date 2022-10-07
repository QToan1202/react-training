import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Welcome from './components/Welcome'
import Comment from './components/Comment'
import './App.css'

function App() {

  return (
    <div>
      <Welcome name="Toan" />
      <Comment userName="React" content="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
    </div>
  )
}

export default App
