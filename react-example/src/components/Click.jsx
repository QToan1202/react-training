import { useState } from "react"

const Click = () => {
  const [click, setClick] = useState(0)
  const [time, setTime] = useState([])

  const handleClick = () => {
    setClick((prevClick) => prevClick += 1)
    setTime([
      ...time,
      new Date().toUTCString()
    ])
  }

  return (
    <>
      <button onClick={handleClick}>You have click this {click} times</button>
      <p>You click at: {time.join(' ')}</p>
    </>
  )
}

export default Click
