import { useContext } from 'react'
import { Container } from '../components/layout/Container'
import { Header } from '../components/layout/Header'
import { NavButton } from '../components/layout/NavButton'

import { ProgressContext } from '../context/progress'

import '../styles/cartas.scoped.scss'

import baixo from '../assets/cartas baixo.png'
import bkg from '../assets/carta bkg.png'
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
  card: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 0
  },
  flip: {
    backgroundColor: 'transparent',
    width: 127,
    height: 181,
    perspective: 1000,
    zIndex: 99999
  }
}

export const Cartas = (link) => {
  const { dispatch } = useContext(ProgressContext)

  const randomRei = Math.floor(Math.random() * (4 - 0)) + 0
  const randomAs = Math.floor(Math.random() * (4 - 0)) + 0
  const randomDois = Math.floor(Math.random() * (4 - 0)) + 0
  const randomTres = Math.floor(Math.random() * (4 - 0)) + 0

  function flipCard({ target }) {
    const parent = target.parentNode.parentNode.parentNode
    dispatch({ type: 'setCard', card: parent.getAttribute('data-card') })
    if (document.querySelectorAll('.flip-card.active').length == 0) {
      parent.classList.add('active')
    }
    document.querySelector('#card-button').classList.add('active')
  }

  return (
    <>
      <Header></Header>
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
              <div
                data-card="rei"
                className="flip-card"
                style={{ order: randomRei, ...style.flip }}
                onClick={(event) => {
                  flipCard(event)
                }}
              >
                <div
                  className="flip-card-inner"
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    textAlign: 'center',
                    transition: 'transform 0.8s',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <div className="flip-card-front" style={style.card}>
                    <img src={bkg} alt="" style={{ width: 127, height: 181 }} />
                  </div>
                  <div className="flip-card-back" style={style.card}>
                    <img src={rei} alt="" style={{ width: 127, height: 181 }} />
                  </div>
                </div>
              </div>
              <div
                className="flip-card"
                style={{ order: randomAs, ...style.flip }}
                onClick={(event) => {
                  flipCard(event)
                }}
                data-card="as"
              >
                <div
                  className="flip-card-inner"
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    textAlign: 'center',
                    transition: 'transform 0.8s',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <div className="flip-card-front" style={style.card}>
                    <img src={bkg} alt="" style={{ width: 127, height: 181 }} />
                  </div>
                  <div className="flip-card-back" style={style.card}>
                    <img src={as} alt="" style={{ width: 127, height: 181 }} />
                  </div>
                </div>
              </div>
              <div
                data-card="dois"
                className="flip-card"
                style={{ order: randomDois, ...style.flip }}
                onClick={(event) => {
                  flipCard(event)
                }}
              >
                <div
                  className="flip-card-inner"
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    textAlign: 'center',
                    transition: 'transform 0.8s',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <div className="flip-card-front" style={style.card}>
                    <img src={bkg} alt="" style={{ width: 127, height: 181 }} />
                  </div>
                  <div className="flip-card-back" style={style.card}>
                    <img src={dois} alt="" style={{ width: 127, height: 181 }} />
                  </div>
                </div>
              </div>
              <div
                data-card="tres"
                className="flip-card"
                style={{ order: randomTres, ...style.flip }}
                onClick={(event) => {
                  flipCard(event)
                }}
              >
                <div
                  className="flip-card-inner"
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    textAlign: 'center',
                    transition: 'transform 0.8s',
                    transformStyle: 'preserve-3d'
                  }}
                >
                  <div className="flip-card-front" style={style.card}>
                    <img src={bkg} alt="" style={{ width: 127, height: 181 }} />
                  </div>
                  <div className="flip-card-back" style={style.card}>
                    <img src={tres} alt="" style={{ width: 127, height: 181 }} />
                  </div>
                </div>
              </div>
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
