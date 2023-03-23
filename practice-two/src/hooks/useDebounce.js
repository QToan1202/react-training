import { useEffect, useState } from 'react'

const useDebounce = (value, delay) => {
  const [currentValue, setCurrentValue] = useState(value)

  useEffect(() => {
    const delayValue = setTimeout(() => {
      setCurrentValue(value)
    }, delay)

    return () => {
      clearTimeout(delayValue)
    }
  }, [value, delay])

  return currentValue
}

export default useDebounce
