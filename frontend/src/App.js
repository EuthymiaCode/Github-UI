import React, { useContext, useState } from 'react'
import { NavBar } from './components/NavBar'
import { ToolsNavBar } from './components/ToolsNavBar'
import { Profile } from './components/Profile'
import Repositories from './components/Repositories'
import { UserData } from './components/UserData'
import { TabContext } from './Context/TabContext'

import GlobalStyles from './styles/GlobalStyles'
import styled, { ThemeProvider } from 'styled-components'
const Container = styled.div`
  display: flex;
`

function App() {
  const { selectedTab } = useContext(TabContext)
  const tabs = {
    repositories: <Repositories />,
    overview: <UserData />,
    projects: <h1>Projects</h1>,
    packages: <h1>Packages</h1>
  }

  const dark = {
    font: '#fff',
    fontPrimary: '#fff',
    bg: ' #252525',
    line: 'rgba(0,0,0,0)'
  }

  const light = {
    font: '#fff',
    fontPrimary: '#1B1F23',
    bg: '#fff',
    line: '#e1e4e8'
  }
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className='App'>
      <ThemeProvider theme={darkMode ? dark : light}>
        <NavBar mode={darkMode} setMode={setDarkMode} />
        <ToolsNavBar />
        <Container>
          <Profile />
          {tabs[selectedTab]}
        </Container>

        <GlobalStyles />
      </ThemeProvider>
    </div>
  )
}

export default App
