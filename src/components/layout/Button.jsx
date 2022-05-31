import '../styles/button.scoped.scss'

export const Button = ({ label, children, ...props }) => {
  return (
    <button className="button" {...props}>
      {label}
      {children}
    </button>
  )
}
