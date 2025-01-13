import React from 'react'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import './ToggleThemeButton.css'
import { ThemeContext } from '../../context/ThemeProvider'
import { useContext } from 'react'

export default function ToggleThemeButton() {

  const {ToggleTheme, darkmode} = useContext(ThemeContext)

  return (
    <button className='toggle-theme-btn'
      onClick={ToggleTheme}
    >
        <span>{darkmode ? 'Light' : 'Dark'}</span>
        <img src={darkmode ? sun : moon} alt="Toggle theme" />
    </button>
  )
}
