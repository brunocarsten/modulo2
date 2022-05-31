import { createContext, useState } from 'react'

import { questions } from '../config'

const AlternativesContext = createContext()

function AlternativesProvider({ children }) {
  const [items, setItems] = useState([])

  const handleState = (payload) => {
    setItems(payload)
  }

  const handleHelp = (payload) => {
    const alternatives = questions[payload].alternatives
    for (const key in alternatives) {
      if (!alternatives[key].correct && key < 3) {
        alternatives[key].inactive = true
      }
    }
    setItems(alternatives)
  }

  const value = { items, handleState, handleHelp }
  return <AlternativesContext.Provider value={value}>{children}</AlternativesContext.Provider>
}

export { AlternativesProvider, AlternativesContext }
