import React, { useContext, useState } from 'react'
import { NavBar } from './components/NavBar'
import { ToolsNavBar } from './components/ToolsNavBar'
import { Profile } from './components/Profile'
import Repositories from './components/Repositories'
import { RepositoriesData } from './components/RepositoriesData'
import Projects from './components/Projects'
import { TabContext } from './Context/TabContext'
import { Footer } from './components/Footer'

import GlobalStyles from './styles/GlobalStyles'
import styled, { ThemeProvider } from 'styled-components'
const Container = styled.div`
  display: flex;
`

function App() {
  const { selectedTab } = useContext(TabContext)
  const tabs = {
    repositories: <Repositories />,
    overview: <RepositoriesData />,
    projects: <Projects />,
    packages: <h1>Packages</h1>
  }

  const dark = {
    font: '#fff',
    fontPrimary: '#fff',
    bg: ' #252525',
    line: 'rgba(0,0,0,0)',
    icon: '#f5f5f5'
  }

  const light = {
    font: '#fff',
    fontPrimary: '#1B1F23',
    bg: '#fff',
    line: '#e1e4e8',
    icon: '#6a737d'
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
      <Footer />
    </div>
  )
}

export default App
