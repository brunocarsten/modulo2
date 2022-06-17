import './styles/transition.scss'
import Routes from './routes'
import { ProgressProvider } from './context/progress'
import { AlternativesProvider } from './context/alternatives'

import { HashRouter } from 'react-router-dom'

function App() {
  return (
    <HashRouter>
      <ProgressProvider>
        <AlternativesProvider>
          <Routes />
        </AlternativesProvider>
      </ProgressProvider>
    </HashRouter>
  )
}

export default App
