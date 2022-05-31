import { createContext, useReducer, useEffect } from 'react'

const ProgressContext = createContext()

const StepReducer = ({ step, points }, payload) => {
  switch (payload.type) {
    case 'increment': {
      return { step: step + 1, points: points + 10 }
    }
    case 'update': {
      const storage = JSON.parse(localStorage.getItem('progress'))
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

  useEffect(() => {
    if (JSON.parse(localStorage.getItem('progress'))) dispatch({ type: 'update' })
  }, [])

  useEffect(() => {
    if (state.step > 0) {
      localStorage.setItem('progress', JSON.stringify(state))
    }
  }, [state])

  const value = { state, dispatch }
  return <ProgressContext.Provider value={value}>{children}</ProgressContext.Provider>
}

export { ProgressProvider, ProgressContext }
