import '../styles/welcome.scoped.scss'

import { useState } from 'react'

import { Container } from '../components/layout/Container'
import { Header } from '../components/layout/Header'
import { Button } from '../components/layout/Button'
import { NavButton } from '../components/layout/NavButton'

import image1 from '../assets/1.png'
import image2 from '../assets/2.png'
import image3 from '../assets/3.png'
import image4 from '../assets/4.png'

export const Welcome = () => {
  const [step, setStep] = useState(1)

  const handleStep = () => {
    setStep(2)
  }

  const handleContent = () => {
    const Component = () => {
      if (step === 1) {
        return (
          <>
            <div className="info">
              <h1 className="title">BOAS-VINDAS!</h1>
              <p>
                Olá! Chegou o momento de você verificar o que aprendeu até aqui. Neste jogo, você vai participar do Show
                do Desenvolvimento Integral. É um jogo de perguntas e respostas que vale o prêmio de se tornar um expert
                em “Estado, etnodesenvolvimento e políticas públicas da primeira infância”.
              </p>

              <p>
                Para isso, você deverá responder oito questões sobre o que foi estudado no Módulo 2 e avançar de nível
                até alcançar o máximo e vencer o jogo.
              </p>

              <p>Boa sorte!</p>
            </div>
            <Button
              onClick={handleStep}
              label="COMEÇAR"
              style={{ width: 300, marginTop: 66, background: '#3DC2EA', color: '#FFF' }}
            />
          </>
        )
      } else {
        return (
          <>
            <div className="info">
              <h1 className="title">REGRAS DO JOGO</h1>
              <ul>
                <li>
                  <img src={image1} alt="1" />
                  <p>
                    O participante deve responder a pergunta de múltipla escolha para avançar. Cada questão possui
                    quatro (4) alternativas possíveis e somente uma (1) correta.
                  </p>
                </li>

                <li>
                  <img src={image2} alt="2" />
                  <p>O participante só avança se acertar a pergunta.</p>
                </li>

                <li>
                  <img src={image3} alt="3" />
                  <p>A cada resposta certa, o participante avança de nível, até chegar no final e vencer o jogo.</p>
                </li>

                <li>
                  <img src={image4} alt="3" />
                  <p>
                    Para cada resposta errada haverá uma mensagem falando para o competidor tentar de novo. A pergunta
                    é, então, repetida, com as mesmas alternativas em uma ordem diferente da anterior, até que a
                    alternativa correta seja escolhida.{' '}
                  </p>
                </li>
                <p style={{ font: 'normal normal normal 16px/24px PT Sans Pro' }}>
                  Recursos possíveis: - Pode-se escolher uma vez a “Ajuda dos especialistas”, que elimina duas questões
                  erradas.{' '}
                </p>
                <p style={{ font: 'normal normal normal 16px/24px PT Sans Pro' }}>
                  - Pode-se escolher as “Cartas” – quatro cartas de baralho são viradas e o participante escolhe uma. Se
                  tirar o rei, nenhuma alternativa errada é eliminada. O ás elimina uma alternativa, o 2 elimina duas
                  alternativas e o 3 elimina todas as três alternativas erradas, restando apenas a correta.
                </p>
              </ul>
            </div>
            <NavButton
              url="/main"
              label="COMEÇAR"
              style={{ width: 300, marginTop: 66, background: '#3DC2EA', color: '#FFF' }}
            />
          </>
        )
      }
    }

    return <Component />
  }

  const style = {
    content: {
      paddingBottom: 60,
      display: 'flex',
      justifyContent: 'flex-end',
      flexWrap: 'wrap'
    }
  }

  return (
    <>
      <div className="welcome">
        <Header hasBackground={false} />
        <Container style={{ width: '60%' }}>
          <div style={style.content}>{handleContent()}</div>
        </Container>
      </div>
    </>
  )
}
