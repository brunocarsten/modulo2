import '../styles/question.scoped.scss'

import { useNavigate, useLocation } from 'react-router-dom'
import { useContext, useState, useEffect, startTransition } from 'react'
import { Button } from './Button'
import { Checkbox } from './Checkbox'
import { ProgressContext } from '../../context/progress'
import { changeAlternatives } from '../../helpers/card'
import { shuffle } from '../../helpers/shuffle'

import overlay from '../../assets/overlay foto popup.png'

export const Question = ({ buttons, ...props }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const { bkg, src, item } = props
  const { alternatives, question, title, message } = item
  const { dispatch, state } = useContext(ProgressContext)
  const { card } = state

  const [items, setItems] = useState([])
  const [holder] = useState(alternatives)
  const [selected, setSelected] = useState(0)

  useEffect(() => {
    startTransition(() => {
      if (location.state) setItems(shuffle(alternatives))
    })

    if (card !== undefined) {
      handleAlternatives()
    } else {
      setItems(holder)
    }
  }, [])

  const handleAlternatives = async () => {
    buttons.forEach((button) => {
      button.current.classList.add('disabled')
    })
    const changedItems = await changeAlternatives(card, holder)
    setItems(changedItems)
  }

  const onChangeValue = (value) => {
    setSelected(value)
  }

  const handleAnswer = () => {
    const { correct } = selected

    if (correct) {
      dispatch({ type: 'increment' })
      navigate('/acerto', { state: { message } })
    } else {
      navigate('/erro')
    }
  }

  const render = () => {
    return items.map((alternative, i) => {
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
          <div className="overlay">
            <img src={overlay} alt="" />
          </div>
          <img src={src} alt="" />
        </div>
      </div>
    </>
  )
}
