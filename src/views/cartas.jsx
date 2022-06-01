import { useContext, useState, useEffect } from 'react'
import { Container } from '../components/layout/Container'
import { Header } from '../components/layout/Header'
import { NavButton } from '../components/layout/NavButton'
import { Card } from '../components/layout/Card'

import { ProgressContext } from '../context/progress'

import '../styles/cartas.scoped.scss'

import baixo from '../assets/cartas baixo.png'
import rei from '../assets/rei.png'
import as from '../assets/as.png'
import dois from '../assets/dois.png'
import tres from '../assets/tres.png'

const style = {
  title: {
    color: '#0E3F02',
    fontWeight: 'bold',
    fontSize: 25,
    textTransform: 'uppercase',
    paddingTop: 40,
    paddingBottom: 27,
    margin: 0
  },
  main: {
    width: 824,
    maxWidth: '100%',
    background: '#F6D55C',
    minHeight: 440,
    borderRadius: 26,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    flexDirection: 'column',
    overflow: 'hidden'
  },
  flip: {
    backgroundColor: 'transparent',
    width: 127,
    height: 181,
    perspective: 1000,
    zIndex: 99999
  }
}

export const Cartas = () => {
  const { dispatch } = useContext(ProgressContext)
  const [items, setItems] = useState([])

  useEffect(() => {
    const array = [
      { image: rei, data: 'rei' },
      { image: as, data: 'as' },
      { image: dois, data: 'dois' },
      { image: tres, data: 'tres' }
    ]

    let currentIndex = array.length,
      randomIndex
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--
      ;[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
    }

    setItems(array)
  }, [])

  function flipCard({ target }) {
    const parent = target.parentNode.parentNode.parentNode
    dispatch({ type: 'setCard', card: parent.getAttribute('data-card') })
    const cards = document.querySelectorAll('.flip-card')
    cards.forEach((card) => {
      card.classList.add('inactive')
    })
    if (document.querySelectorAll('.flip-card.active').length === 0) {
      parent.classList.add('active')
    }
    document.querySelector('#card-button').classList.add('active')
  }

  return (
    <>
      <Header />
      <Container>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'calc(100vh - 83px)' }}>
          <div className="popup" style={style.main}>
            <h1 style={style.title}>CARTAS</h1>
            <div
              className="cartas"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '82%',
                padding: '0px 9%'
              }}
            >
              {items.map((card, i) => {
                return (
                  <Card
                    className="flip-card"
                    data-card={card.data}
                    key={i}
                    image={card.image}
                    style={style.flip}
                    onClick={(event) => {
                      flipCard(event)
                    }}
                  />
                )
              })}
            </div>
            <NavButton
              id="card-button"
              label="AVANÇAR"
              url="/main"
              style={{
                width: 404,
                marginTop: 27,
                background: '#3DC2EA',
                color: '#FFF',
                maxWidth: '100%',
                borderRadius: 30,
                opacity: 0,
                transition: 'all 0.3s'
              }}
            >
              AVANÇAR
            </NavButton>
            <div className="bottom" style={{ marginTop: 'auto', height: 73 }}>
              <img src={baixo} alt="" />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
