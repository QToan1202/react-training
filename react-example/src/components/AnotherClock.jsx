import { useEffect, useState } from 'react'

const AnotherClock = () => {
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const myClock = setInterval(() => setDate(new Date()), 1000)
    return () => {
      clearInterval(myClock)
    }
  }, [])

  return (
    <div>
      <h2>Another Clock {date.toLocaleTimeString()}.</h2>
    </div>
  )
}

export default AnotherClock 