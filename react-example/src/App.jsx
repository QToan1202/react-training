import { useEffect, useRef, useState, createRef, Profiler } from 'react'
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
import Modal from './components/Modal'
import Click from './components/Click'
import AnotherClock from './components/AnotherClock'

function App() {
  const myComment = useRef(null)
  const myButton = createRef()
  const [posts, setPosts] = useState([])
  const [text, setText] = useState('Init')
  
  useEffect(() => {
    console.log(myComment.current)
    console.log(myButton.current)
  }, [myComment])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setPosts(json))
  }, [])

  useEffect(() => setText('Hello'))

  const renderCallback = ( id, phase, actualDuration, baseDuration, startTime, commitTime, interactions ) => {
    console.log({
      id, phase, actualDuration, baseDuration, startTime, commitTime, interactions
    });
  }

  return (
    <div>
      <Profiler id='myClock' onRender={renderCallback}>
        <Clock />
      </Profiler>
      <AnotherClock />
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

      <Modal>
        <h2>My task modal</h2>
        <Task />
      </Modal>

      <Profiler id='myTask' onRender={renderCallback}>
        <Task />
      </Profiler>

      <Click />

      {posts.map((post) => <p key={post.id}>{JSON.stringify(post)}</p>)}

      <p>{text}</p>
    </div>
  )
}

export default App
