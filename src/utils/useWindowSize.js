// External Dependencies
import { useState, useEffect } from 'react'

// Local Functions
function getSize() {
  if (typeof window !== 'undefined') {
    return {
      innerHeight: window.innerHeight,
      innerWidth: window.innerWidth,
      outerHeight: window.outerHeight,
      outerWidth: window.outerWidth,
    }
  }
  return 0;
}

// Hook Definition
function useWindowSize() {
  const [windowSize, setWindowSize] = useState(getSize())

  function handleResize() {
    setWindowSize(getSize())
  }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize)
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [])

  return windowSize
}

export default useWindowSize
