import React, { useState, useEffect, lazy, Suspense } from 'react'
import { useLocation } from 'react-router-dom'

import { Routes, Route } from 'react-router-dom'

import { Start } from '../views/start'
import { Welcome } from '../views/welcome'
import { PopupAcerto } from '../views/acerto'
import { PopupErro } from '../views/erro'
import { PopupContagem } from '../views/contagem'
import { Main } from '../views/main'
import { Cartas } from '../views/cartas'

export default () => {
  const location = useLocation()
  const [displayLocation, setDisplayLocation] = useState(location)
  const [transitionStage, setTransistionStage] = useState('fadeIn')

  useEffect(() => {
    if (location !== displayLocation) setTransistionStage('fadeOut')
  }, [location, displayLocation])

  return (
    <>
      <div
        className={`${transitionStage}`}
        onAnimationEnd={() => {
          if (transitionStage === 'fadeOut') {
            setTransistionStage('fadeIn')
            setDisplayLocation(location)
          }
        }}
      >
        <Routes location={displayLocation}>
          <Route exact path="/" element={<Start />} />
          <Route exact path="/boas-vindas" element={<Welcome />} />
          <Route exact path="/main" element={<Main />} />
          <Route exact path="/acerto" element={<PopupAcerto />} />
          <Route exact path="/erro" element={<PopupErro />} />
          <Route exact path="/contagem" element={<PopupContagem />} />
          <Route exact path="/cartas" element={<Cartas />} />
        </Routes>
      </div>
    </>
  )
}
