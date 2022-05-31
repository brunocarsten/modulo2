import pontos from '../../assets/pontos.png'
import zero from '../../assets/popup 0.png'
import { NavButton } from './NavButton'

export const Popup = ({
  bkg,
  imagem,
  imagemprop,
  title,
  titleprop,
  text,
  textprop,
  label,
  link,
  dir,
  esq,
  ...props
}) => {
  const style = {
    main: {
      width: 544,
      maxWidth: '100%',
      background: bkg,
      minHeight: 289,
      borderRadius: 26,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      overflow: 'hidden'
    },
    bkg: {
      height: 289
    },
    pontos: {
      display: 'flex',
      alignItems: 'center',
      columnGap: 30
    },
    content: {
      padding: '30px 8px 20px 8px',
      display: 'flex',
      textAlign: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      flexWrap: 'wrap'
    }
  }
  return (
    <div className="popup" style={style.main}>
      <div className="bkgesq" style={style.bkg}>
        <img src={esq.imgesq} alt="" />
      </div>
      <div className="content" style={style.content}>
        <div className="numeros" style={imagemprop}>
          <div className="pontos" style={style.pontos}>
            <div className="number">
              <img
                src={imagem.imgcontent}
                alt=""
                style={{
                  height: 55,
                  filter:
                    'brightness(0) saturate(100%) invert(21%) sepia(12%) saturate(3223%) hue-rotate(64deg) brightness(88%) contrast(102%)'
                }}
              />
              <img src={zero} alt="" />
            </div>
            <div className="word">
              <img src={pontos} alt="" />
            </div>
          </div>
        </div>
        <h1 style={titleprop}>{title}</h1>
        <p style={textprop}>{text}</p>
        <NavButton
          label="AVANÇAR"
          url={link}
          style={{ width: 264, marginTop: 20, background: '#3DC2EA', color: '#FFF', maxWidth: '100%' }}
        >
          {label}
        </NavButton>
      </div>
      <div className="bkgdir" style={style.bkg}>
        <img src={dir.imgdir} alt="" />
      </div>
    </div>
  )
}
