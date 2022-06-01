import { Container } from '../components/layout/Container'
import { Background } from '../components/layout/Background'
import { NavButton } from '../components/layout/NavButton'
import image from '../assets/fundo.png'

import quizz from '../assets/quizz.png'
import comunidades from '../assets/comunidades.png'
import modulo1 from '../assets/modulo.png'
import logo from '../assets/logo.png'

const style = {
  main: {
    marginLeft: '10%'
  },
  azul: {
    padding: '46px 0px 28px 17px',
    background: '#3DC2EA',
    maxWidth: '69%',
    position: 'relative'
  },
  logo: {
    display: 'table-cell',
    verticalAlign: 'bottom',
    textAlign: 'center'
  },
  text: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 20,
    margin: 0
  },
  green: {
    width: '30%',
    display: 'table',
    maxHeight: 705,
    position: 'absolute',
    right: 0,
    bottom: 45
  }
}

export const Start = () => (
  <>
    <Background src={image}>
      <Container style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={style.main}>
          <div style={style.azul}>
            <img style={{ width: 250, marginBottom: 10 }} src={quizz} alt="" />
            <p style={style.text}>CURSO ATENDIMENTO A</p>
            <img style={{ width: 627, marginTop: 30, marginBottom: 30 }} src={comunidades} alt="" />
            <p style={style.text}>E POVOS</p>
            <p style={style.text}>TRADICIONAIS</p>
          </div>
          <img style={{ width: 330, marginTop: 26, marginBottom: 12 }} src={modulo1} alt="" />
          <p style={style.text}>SHOW DO DESENVOLVIMENTO</p>
          <p style={style.text}>INTEGRAL</p>

          <NavButton
            url="/boas-vindas"
            label="COMEÇAR"
            style={{ marginBottom: 50, width: 300, marginTop: 66, background: '#3DC2EA', color: '#FFF' }}
          />
        </div>
        <div style={style.green}>
          <div style={style.logo}>
            <img style={{ width: 124 }} src={logo} alt="" />
          </div>
        </div>
      </Container>
    </Background>
  </>
)
