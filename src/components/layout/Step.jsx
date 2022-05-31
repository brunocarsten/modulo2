import { useContext } from 'react'
import { ProgressContext } from '../../context/progress'

export const Step = ({ ...props }) => {
  const { state } = useContext(ProgressContext)
  const { step } = state
  return (
    <a href="/main" {...props}>
      <img src={props.src} alt="" />
    </a>
  )
}
