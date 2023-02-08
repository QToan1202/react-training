import { useEffect, useState } from 'react'
import { mutate } from 'swr'

const useDebounce = (value, delay) => {
  const [currentValue, setCurrentValue] = useState(value)

  useEffect(() => {
    const delayValue = setTimeout(() => {
      setCurrentValue(value)
      mutate([import.meta.env.VITE_API_PRODUCTS, currentValue])
    }, delay)

    return () => {
      clearTimeout(delayValue)
    }
  }, [value, delay])

  return currentValue
}

export default useDebounce
