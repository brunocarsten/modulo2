import '../styles/container.scoped.scss'

export const Container = ({ children, ...props }) => {
  return (
    <div className="container" {...props}>
      {children}
    </div>
  )
}
