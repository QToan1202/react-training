import { useEffect, useRef, useState, createRef, Profiler, useCallback, useLayoutEffect, useTransition } from 'react'
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
import Box from './components/Box'
import Tab from './components/Tab'
import AboutTab from './components/AboutTab'
import SlowTab from './components/SlowTab'
import AnotherTab from './components/AnotherTab'

function App() {
  const myComment = useRef(null)
  const myButton = createRef()
  const [posts, setPosts] = useState([])
  const [text, setText] = useState('Init')
  const myInput = useRef(null)
  const fetchData = useCallback(async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await data.json()

    setPosts(posts)
  }, [])
  const [width, setWidth] = useState()
  const [isPending, startTransition] = useTransition()
  const [tab, setTab] = useState('about')
  
  useEffect(() => {
    console.log(myButton.current)
    myInput.current.focus()
  }, [myComment])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  useEffect(() => setText('Hello'))

  useLayoutEffect(() => {
    setWidth(window.innerWidth)
  })

  const renderCallback = ( id, phase, actualDuration, baseDuration, startTime, commitTime, interactions ) => {
    console.log({
      id, phase, actualDuration, baseDuration, startTime, commitTime, interactions
    });
  }

  const handleClick = () => {
    myComment.current.focusMyComment()
  }

  const selectTab = (nextTab) => {
    startTransition(() => setTab(nextTab))
  }

  return (
    <div>
      <Tab onClick={() => selectTab('about')} isActive={tab === 'about'}>About</Tab>
      <Tab onClick={() => selectTab('slow')} isActive={tab === 'slow'}>Slow</Tab>
      <Tab onClick={() => selectTab('another')} isActive={tab === 'another'}>Another</Tab>
      {tab === 'about' && <AboutTab />}
      {tab === 'slow' && <SlowTab />}
      {tab === 'another' && <AnotherTab />}
      <p>Current width: {width} px</p>
      <Clock />
      <AnotherClock />
      <Welcome name="Toan" />
      <Comment userName="React" content="Lorem ipsum dolor sit amet consectetur adipisicing elit." />
      <ErrorBoundary>
        <Dialog />
      </ErrorBoundary>
      <Menu />
      <Task />
      <Form ref={myInput}/>
      <Test />
      <Class />
      <Text /> {/* ngquoctoan.02@gmail.com */}
      <UserContext.Provider value='toan124677@gmai.com'>
        <Title /> {/* toan124677@gmai.com */}
      </UserContext.Provider>

      <Comment ref={myComment} userName="Toan" content="Test ref" />
      <button onClick={handleClick}>Click to focus comment</button>

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
      <Box />
    </div>
  )
}

export default App
