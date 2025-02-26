import React from 'react'
import fondo from '../assets/fondo.png'

export function ComponentFondo({ icon }) {
  const iconPath = `/weather-icons/${icon}.png`
  return (
    <>
      <div className='relative'>
        <img className="w-full h-auto opacity-30" src={fondo} alt="background" />
        <div className='absolute inset-0 flex items-center justify-center '>
          <img src={iconPath} alt="weather icon" />
        </div>
      </div>


    </>
  )
}
