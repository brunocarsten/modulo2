import '../styles/question.scoped.scss'

import { useNavigate } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react'
import { Button } from './Button'
import { Checkbox } from './Checkbox'
import { AlternativesContext } from '../../context/alternatives'
import { ProgressContext } from '../../context/progress'

import overlay from '../../assets/overlay foto popup.png'

export const Question = ({ ...props }) => {
  const navigate = useNavigate()
  const { bkg, src, item } = props
  const { alternatives, question, title } = item
  const { dispatch, state } = useContext(ProgressContext)
  const { items, handleState } = useContext(AlternativesContext)
  const { card } = state

  const [selected, setSelected] = useState(0)

  useEffect(() => {
    if (card !== 'undefined') handleAlternatives(card, items)
  }, [])

  const handleAlternatives = (card) => {
    let data = []
    switch (card) {
      case 'tres':
        for (const key in alternatives) {
          if (!alternatives[key].correct) {
            alternatives[key].inactive = true
          }
        }
        data = alternatives
        break
      case 'dois':
        for (const key in alternatives) {
          if (!alternatives[key].correct && key < 3) {
            alternatives[key].inactive = true
          }
        }
        data = alternatives
        break
      case 'as':
        let alternative = alternatives[Math.floor(Math.random() * alternatives.length)]
        if (!alternative.correct) alternative.inactive = true
        data = alternatives
        break
      default:
        break
    }

    handleState(data)
  }

  const onChangeValue = (value) => {
    setSelected(value)
  }

  const handleAnswer = () => {
    const { correct } = selected

    if (correct) {
      dispatch({ type: 'increment' })
      navigate('/acerto')
    } else {
      navigate('/erro')
    }
  }

  const render = () => {
    return alternatives.map((alternative, i) => {
      return (
        <li
          key={i}
          className={`alternative ${selected.i === i ? 'active' : ''} ${alternative.inactive ? 'inactive' : ''}`}
        >
          <Checkbox
            checked={selected.i === i}
            item={alternative}
            onChange={() => {
              onChangeValue({ correct: alternative.correct, i: i })
            }}
          />
        </li>
      )
    })
  }

  return (
    <>
      <div className="box" style={{ backgroundColor: bkg }}>
        <div className="content">
          <p>{title}</p>
          <p>{question}</p>
          <ul className="alternatives">{render()}</ul>
          <Button
            onClick={() => {
              handleAnswer()
            }}
            label="RESPONDER"
            style={{ marginBottom: 50, background: '#3DC2EA', color: '#FFF' }}
          />
        </div>
        <div className="image" style={{ position: 'relative' }}>
          <div className="overlay" style={{ position: 'absolute', top: '0', left: '0', opacity: '0.75' }}>
            <img src={overlay} alt="" />
          </div>
          <img src={src} alt="" />
        </div>
      </div>
    </>
  )
}
