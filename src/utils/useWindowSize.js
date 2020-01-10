// External Dependencies
import { useState, useEffect } from 'react'

// Local Functions
function getSize() {
  return {
    innerHeight: window.innerHeight,
    innerWidth: window.innerWidth,
    outerHeight: window.outerHeight,
    outerWidth: window.outerWidth,
  }
}

// Hook Definition
function useWindowSize() {
  const [windowSize, setWindowSize] = useState(getSize())

  function handleResize() {
    setWindowSize(getSize())
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return windowSize
}

export default useWindowSize
