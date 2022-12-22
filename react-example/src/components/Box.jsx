import { useReducer } from "react"

const reducer = (state, action) => {
  switch (action.type) {
    case 'change_content':
      return { content: 'This content changed' }

    case 'reset_content':
      return { content: 'This content reset' }
  
    default:
      throw Error('Unknown action: ' + action.type)
  }
}

const Box = () => {
  const [state, dispatch] = useReducer(reducer, {content: 'Lorem ipsum dolor sit amet'})

  const handleClick = () => dispatch({type: 'change_content'})
  const handleReset = () => dispatch({type: 'reset_content'})

  return (
    <>
      <h3>My box</h3>
      <p>{state.content}</p>
      <button onClick={handleClick}>Change content</button>
      <button onClick={handleReset}>Reset content</button>
    </>
  )
}

export default Box
