import { useEffect, useState } from 'react'

const useDebounce = (value: string, delay: number): string => {
  const [currentValue, setCurrentValue] = useState<string>(value)

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
