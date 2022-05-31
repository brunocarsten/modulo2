import { useRef, useLayoutEffect } from 'react'
import '../styles/checkbox.scss'

export const Checkbox = ({ ...props }) => {
  const inputRef = useRef()

  return (
    <>
      <label ref={inputRef} style={{ display: 'flex', alignItems: 'flex-start', cursor: 'pointer' }}>
        <input disabled={props.item.inactive} type="radio" {...props} />
        {props.item.text}
      </label>
    </>
  )
}
