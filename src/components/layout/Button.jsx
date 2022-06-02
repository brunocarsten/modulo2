import { forwardRef } from 'react'
import '../styles/button.scoped.scss'

export const Button = forwardRef(({ label, children, ...props }, ref) => {
  return (
    <button ref={ref} className="button" {...props}>
      {label}
      {children}
    </button>
  )
})
