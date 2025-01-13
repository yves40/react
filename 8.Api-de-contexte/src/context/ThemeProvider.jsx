import { createContext, useState } from "react"

export const ThemeContext = createContext()

export default function ThemeProvider(props) {

  const [darkmode, setDarkMode] = useState(false)
  const themeVersion = 'ThemeProvider 1.01, Jan 14 2025'

  function ToggleTheme() {
    setDarkMode(!darkmode)
  }

  if(darkmode) {
    document.body.classList.add('dark')
  }
  else {
    document.body.classList.remove('dark')
  }
  return (
    <ThemeContext.Provider value={{ToggleTheme, darkmode, themeVersion}}>
      {props.children}
    </ThemeContext.Provider>
  )
}