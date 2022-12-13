import { useEffect, useRef, useState, createRef } from 'react'
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
import ErrorBoundary from './components/ErrorBoundary'
import Button from './components/Button'
import Message from './components/Message'

function App() {
  const myComment = useRef(null)
  const myButton = createRef()
  
  useEffect(() => {
    console.log(myComment.current)
    console.log(myButton.current)
  }, [myComment])

  return (
    <div>
      <Clock />
      <Welcome name="Toan" />
      <Comment userName="React" content="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
      <ErrorBoundary>
        <Dialog />
      </ErrorBoundary>
      <Menu />
      <Task />
      <Form />
      <Test />
      <Class />
      <Text /> {/* ngquoctoan.02@gmail.com */}
      <UserContext.Provider value='toan124677@gmai.com'>
        <Title /> {/* toan124677@gmai.com */}
      </UserContext.Provider>

      <Comment ref={myComment} userName="Toan" content="Test ref" />

      <Button ref={myButton} title='My button' />

      <Message>
        {content => (<p>{content}</p>)}
      </Message>
    </div>
  )
}

export default App