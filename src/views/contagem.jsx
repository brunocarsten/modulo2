import { Container } from '../components/layout/Container'
import { Link } from 'react-router-dom'
import { NavButton } from '../components/layout/NavButton'


import imagem_1 from '../assets/1.png'
import imagem_2 from '../assets/2.png'
import imagem_3 from '../assets/3.png'
import imagem_4 from '../assets/4.png'
import imagem_5 from '../assets/5.png'
import imagem_6 from '../assets/6.png'
import imagem_7 from '../assets/7.png'
import imagem_8 from '../assets/8.png'
import imgdir from '../assets/popup amarelo dir.png'
import imgesq from '../assets/popup amarelo esq.png'
import pontos from '../assets/pontos.png'
import zero from '../assets/popup 0.png'
import logo from '../assets/logo verde.png'
import topodir from '../assets/formas topo dir.png'
import topoesq from '../assets/formas topo esq.png'
import chevron from '../assets/chevron left.png'

const style = {
    img: {
        paddingBottom: 20
    },
    title: {
        color: '#0E3F02',
        fontWeight: 'bold',
        fontSize: 25,
        paddingBottom: 18,
        margin: 0
    },
    text: {
        color: '#0E3F02',
        fontWeight: 'bold',
        fontSize: 16,
        margin: 0,
        paddingBottom: 20
    },
    main: {
        width: 544,
        maxWidth: '100%',
        background: '#F6D55C',
        minHeight: 289,
        borderRadius: 26,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        overflow: 'hidden'
    },
    header: {
        width: '100%',
        maxWidth: '100%',
        height: 83,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        position: 'relative'
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
        padding: '30px 6px 20px 6px',
        display: 'flex',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap'
    }
}

export const PopupContagem = (link, acertos) => { 
    const quant = acertos;
    let img = '';
    if (quant == 1) {
        img = imagem_1;
    }else if (quant == 2) {
        img = imagem_2;
    }else if (quant == 3) {
        img = imagem_3;
    }else if (quant == 4) {
        img = imagem_4;
    }else if (quant == 5) {
        img = imagem_5;
    }else if (quant == 6) {
        img = imagem_6;
    }else if (quant == 7) {
        img = imagem_7;
    }else if (quant == 8) {
        img = imagem_8;
    }
    return (
    <>
    <div className="header" style={style.header}>
        <div className="bkgesq" style={{ height: 83 }}>
            <img src={topoesq} alt="" />
        </div>
        <div className="content" style={{ paddingLeft: '6.5%' }}>
            <Link
            to="/"
            style={{
                display: 'flex',
                alignItems: 'center',
                fontSize: 16,
                lineHeight: 24,
                fontWeight: 'bold',
                color: '#173F5F',
                textDecoration: 'none'
            }}
            >
            <img src={chevron} style={{ marginRight: 8 }} alt="" />
            Voltar ao início
            </Link>
        </div>
        <img src={logo} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}} alt="" />
        <div className="bkgdir" style={{ height: 83, marginLeft: 'auto' }}>
            <img src={topodir} alt="" />
        </div>
    </div>
    <Container>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: 'calc(100vh - 83px)'}}>
            <div className="popup" style={style.main}>
                <div className="bkgesq" style={style.bkg}>
                    <img src={imgesq} alt="" />
                </div>
                <div className="content" style={style.content}>
                    <h1 style={style.title}>Parabéns!</h1>
                    <p style={style.text}>Você chegou com sucesso ao fim desta jornada e visitou diversas comunidades de povos tradicionais. Continue o curso e aprenda muito mais!</p>
                    <div className="numeros" style={style.img}>
                    <div className="pontos" style={style.pontos}>
                        <div className="number">
                        <img
                            src={img}
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
                    <NavButton
                    label="AVANÇAR"
                    url={link}
                    style={{ width: 264, background: '#3DC2EA', color: '#FFF', maxWidth: '100%' }}
                    >
                    AVANÇAR
                    </NavButton>
                </div>
                <div className="bkgdir" style={style.bkg}>
                    <img src={imgdir} alt="" />
                </div>
                </div>
        </div>
    </Container>
  </>
    )
}
