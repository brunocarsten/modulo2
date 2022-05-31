export const Background = ({ src, children }) => {
  const style = {
    background: {
      backgroundImage: `url("${src}")`,
      backgroundSize: 'cover',
      overflowX: 'hidden',
      width: '100%',
      height: '100vh'
    }
  }

  return (
    <div style={style.background} className="background">
      {children}
    </div>
  )
}
