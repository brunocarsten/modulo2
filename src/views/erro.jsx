import { Container } from '../components/layout/Container'
import { Header } from '../components/layout/Header'
import { Button } from '../components/layout/Button'

import { useNavigate } from 'react-router-dom'

import imgdir from '../assets/popup azul dir.png'
import imgesq from '../assets/popup azul esq.png'

const style = {
  title: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 25,
    margin: 0
  },
  text: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
    margin: 0,
    width: '100%',
    paddingBottom: 20
  },
  main: {
    width: 544,
    maxWidth: '100%',
    background: '#173F5F',
    minHeight: 289,
    borderRadius: 26,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    overflow: 'hidden'
  },
  bkg: {
    height: 289
  },
  content: {
    padding: '30px 8px 20px 8px',
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap'
  }
}

export const PopupErro = (link) => {
  const navigate = useNavigate()

  return (
    <>
      <Header></Header>
      <Container>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'calc(100vh - 83px)' }}>
          <div className="popup" style={style.main}>
            <div className="bkgesq" style={style.bkg}>
              <img src={imgesq} alt="" />
            </div>
            <div className="content" style={style.content}>
              <h1 style={style.title}>A resposta não está certa.</h1>
              <p style={style.text}>Tente novamente!</p>
              <Button
                onClick={() => {
                  navigate(-1)
                }}
                label="VOLTAR"
                url={link}
                style={{ width: 264, marginTop: 20, background: '#3DC2EA', color: '#FFF', maxWidth: '100%' }}
              >
              </Button>
            </div>
            <div className="bkgdir" style={style.bkg}>
              <img src={imgdir} alt="" />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
