import { createContext, useState } from "react"

export const ThemeContext = createContext()

export default function ThemeProvider(props) {

  const [darkmode, setDarkMode] = useState(false)

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
    <ThemeContext.Provider value={{ToggleTheme, darkmode}}>
      {props.children}
    </ThemeContext.Provider>
  )
}