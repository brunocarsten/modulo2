import '../styles/main.scoped.scss'
import { useContext, useRef } from 'react'

import { Container } from '../components/layout/Container'
import { Question } from '../components/layout/Question'
import { ProgressContext } from '../context/progress'
import { AlternativesContext } from '../context/alternatives'

import { Link } from 'react-router-dom'
import { Button } from '../components/layout/Button'

import topodir from '../assets/formas topo dir.png'
import topoesq from '../assets/formas topo esq.png'
import chevron from '../assets/chevron left.png'
import carta from '../assets/icone carta.png'
import ajuda from '../assets/icone ajuda.png'

import { questions } from '../config'

export const Main = () => {
  const style = {
    main: {
      width: '100%',
      maxWidth: '100%',
      height: 83,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      overflow: 'hidden'
    }
  }

  const { state } = useContext(ProgressContext)
  const { handleHelp } = useContext(AlternativesContext)
  const { step } = state
  const cardButtonRef = useRef()
  const helpButtonRef = useRef()

  const activateHelp = () => {
    cardButtonRef.current.classList.add('disabled')
    helpButtonRef.current.classList.add('disabled')
    handleHelp(step)
  }

  return (
    <>
      <div className="header" style={style.main}>
        <div className="bkgesq" style={{ height: 83 }}>
          <img src={topoesq} alt="" />
        </div>
        <div
          className="content"
          style={{
            padding: '0px 6.5%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            width: '100%'
          }}
        >
          <Link
            to="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              fontSize: 16,
              height: 50,
              lineHeight: '24px',
              fontWeight: 'bold',
              color: '#173F5F',
              textDecoration: 'none',
              marginRight: 'auto'
            }}
          >
            <img src={chevron} style={{ marginRight: 8 }} alt="" />
            Voltar ao início
          </Link>
          <Link
            ref={cardButtonRef}
            to="/cartas"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#3DC2EA',
              padding: '0px 35px',
              height: 50,
              borderRadius: 30,
              fontSize: 13,
              lineHeight: '16px',
              fontWeight: 'bold',
              color: '#FFFFFF',
              textDecoration: 'none',
              marginRight: 50
            }}
          >
            <img src={carta} style={{ marginRight: 14 }} alt="" />
            CARTAS
          </Link>
          <Button
            ref={helpButtonRef}
            style={{
              width: 300,
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#3DC2EA',
              padding: '0px 35px',
              height: 50,
              borderRadius: 30,
              fontSize: 13,
              lineHeight: '16px',
              fontWeight: 'bold',
              color: '#FFFFFF',
              textDecoration: 'none'
            }}
            onClick={() => {
              activateHelp()
            }}
          >
            <img src={ajuda} style={{ marginRight: 14 }} alt="" />
            AJUDA DOS ESPECIALISTAS
          </Button>
        </div>
        <div className="bkgdir" style={{ height: 83, marginLeft: 'auto' }}>
          <img src={topodir} alt="" />
        </div>
      </div>
      <Container>
        <div className="question">
          <article>
            {questions.map((item) => {
              if (item.index === step) {
                return (
                  <Question
                    buttons={[cardButtonRef, helpButtonRef]}
                    src={item.image}
                    key={item.index}
                    bkg="#FF9955"
                    item={item}
                  />
                )
              }
            })}
          </article>
        </div>
      </Container>
    </>
  )
}
