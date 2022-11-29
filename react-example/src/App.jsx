import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Welcome from './components/Welcome'
import Comment from './components/Comment'
import Clock from './components/Clock'
import Dialog from './components/Dialog'
import Menu from './components/Menu'
import Task from './components/Task'
import Form from './components/Form'
import Test from './components/Test'
import Class from './components/Class'
import './App.css'
import Text from './components/Text'
import { UserContext } from './contexts/user'
import Title from './components/Title'

function App() {

  return (
    <div>
      <Clock />
      <Welcome name="Toan" />
      <Comment userName="React" content="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
      <Dialog />
      <Menu />
      <Task />
      <Form />
      <Test />
      <Class />
      <Text /> {/* ngquoctoan.02@gmail.com */}
      <UserContext.Provider value='toan124677@gmai.com'>
        <Title /> {/* toan124677@gmai.com */}
      </UserContext.Provider>
    </div>
  )
}

export default App
