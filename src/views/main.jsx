import '../styles/main.scoped.scss'
import { useContext } from 'react'

import { Header } from '../components/layout/Header'
import { Container } from '../components/layout/Container'
import { Question } from '../components/layout/Question'
import { ProgressContext } from '../context/progress'
import { AlternativesProvider } from '../context/alternatives'

import { questions } from '../config'

export const Main = () => {
  const { state } = useContext(ProgressContext)
  const { step } = state

  return (
    <>
      <Header></Header>
      <Container>
        <div className="question">
          {/* <AlternativesProvider> */}
          <article>
            {questions.map((item) => {
              if (item.index === step) {
                return <Question src={item.image} key={item.index} bkg="#FF9955" item={item} />
              }
            })}
          </article>
          {/* </AlternativesProvider> */}
        </div>
      </Container>
    </>
  )
}
