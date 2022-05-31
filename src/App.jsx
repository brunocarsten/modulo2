import './styles/transition.scss'
import Routes from './routes'
import { ProgressProvider } from './context/progress'
import { AlternativesProvider } from './context/alternatives'

import { BrowserRouter, BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <ProgressProvider>
        <AlternativesProvider>
          <Routes />
        </AlternativesProvider>
      </ProgressProvider>
    </BrowserRouter>
  )
}

export default App
