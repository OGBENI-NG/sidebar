import React, { useState, useContext } from 'react'
import Sidebar from './components/Sidebar'
import logo from './asset/img/logo.png'
import user from './asset/img/user.png'
import { ThemeContext } from './components/ThemeProvider'


export default function App() {
      const [inputValue, setInputValue] = useState("")
      const { toggle, toggleTheme, theme, toggleOpen, lightMode ,darkMode} = useContext(ThemeContext)

      function handleChange(e) {
            setInputValue(e.target.value)
      }
      return (
            <main className={`${theme === "light" ? "bg-bgWhtColor" : "bg-bgColor"} font-Poppins transition-all`}>
                  <Sidebar
                        handleChange={handleChange}
                        inputValue={inputValue}
                        logo={logo}
                        theme={theme}
                        toggleTheme={toggleTheme}
                        darkMode={darkMode}
                        lightMode={lightMode}
                        user={user}
                        toggle={toggle}
                        toggleOpen={toggleOpen}
                  />
            </main>
      )
}
