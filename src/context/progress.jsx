import { createContext, useReducer, useEffect, useLayoutEffect } from 'react'

const ProgressContext = createContext()

const StepReducer = ({ step, points }, payload) => {
  switch (payload.type) {
    case 'increment': {
      return { step: step + 1, points: points + 10 }
    }
    case 'update': {
      const storage = JSON.parse(localStorage.getItem('modulo2'))
      return { step: storage.step, points: storage.points }
    }
    case 'setCard': {
      return { step: step, points: points, card: payload.card }
    }
    default: {
      throw new Error(`Unhandled action type: ${payload.type}`)
    }
  }
}

function ProgressProvider({ children }) {
  const [state, dispatch] = useReducer(StepReducer, {
    step: 0,
    points: 0
  })

  useLayoutEffect(() => {
    const storage = JSON.parse(localStorage.getItem('modulo2'))
    if (storage) {
      if (storage.step === 8) localStorage.clear()
    }
  }, [])

  useLayoutEffect(() => {
    if (JSON.parse(localStorage.getItem('modulo2'))) dispatch({ type: 'update' })
  }, [])

  useEffect(() => {
    if (state.step > 0) {
      localStorage.setItem('modulo2', JSON.stringify(state))
    }
  }, [state])

  const value = { state, dispatch }
  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>
}

export { ProgressProvider, ProgressContext }
