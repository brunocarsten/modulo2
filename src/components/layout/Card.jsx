import { memo } from 'react'
import bkg from '../../assets/carta bkg.png'

export const Card = memo(({ image, ...props }) => {
  const style = {
    card: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      zIndex: 0
    },
    inner: {
      position: 'relative',
      width: '100%',
      height: '100%',
      textAlign: 'center',
      transition: 'transform 0.8s',
      transformStyle: 'preserve-3d'
    }
  }

  return (
    <div {...props}>
      <div className="flip-card-inner" style={style.inner}>
        <div className="flip-card-front" style={style.card}>
          <img src={bkg} alt="" style={{ width: 127, height: 181 }} />
        </div>
        <div className="flip-card-back" style={style.card}>
          <img src={image} alt="" style={{ width: 127, height: 181 }} />
        </div>
      </div>
    </div>
  )
})
