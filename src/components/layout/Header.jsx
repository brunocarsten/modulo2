import topodir from '../../assets/formas topo dir.png'
import topoesq from '../../assets/formas topo esq.png'
import chevron from '../../assets/chevron left.png'

import { Link } from 'react-router-dom'

export const Header = ({ hasBackground = true, css }) => {
  const style = {
    main: {
      width: '100%',
      maxWidth: '100%',
      height: 83,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-start',
      overflow: 'hidden'
    }
  }

  const RenderBackground = ({ children }) => {
    const Component = () => {
      if (hasBackground) {
        return (
          <>
            <div className="bkgesq" style={{ height: 83 }}>
              <img src={topoesq} alt="" />
            </div>
            <div
              className="content"
              style={{
                padding: '0px 6.5%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                width: '100%'
              }}
            >
              {children}
            </div>
            <div className="bkgdir" style={{ height: 83, marginLeft: 'auto' }}>
              <img src={topodir} alt="" />
            </div>
          </>
        )
      } else {
        return (
          <>
            <div className="bkgesq" style={{ width: 136, height: 83 }}></div>
            <div
              className="content"
              style={{
                padding: '0px 6.5%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-end',
                width: '100%'
              }}
            >
              {children}
            </div>
            <div className="bkgdir" style={{ width: 136, height: 83, marginLeft: 'auto' }}></div>
          </>
        )
      }
    }

    return <Component />
  }

  return (
    <div className="header" style={{ ...css, ...style.main }}>
      <RenderBackground>
        <Link
          to="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            fontSize: 16,
            height: 50,
            lineHeight: '24px',
            fontWeight: 'bold',
            color: '#173F5F',
            textDecoration: 'none',
            marginRight: 'auto'
          }}
        >
          <img src={chevron} style={{ marginRight: 8 }} alt="" />
          Voltar ao início
        </Link>
      </RenderBackground>
    </div>
  )
}
