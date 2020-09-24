import React, { useContext, useState } from 'react'
import { NavBar } from './components/NavBar'
import { ToolsNavBar } from './components/ToolsNavBar'
import { Profile } from './components/Profile'
import Repositories from './components/Repositories'
import { RepositoriesData } from './components/RepositoriesData'
import Projects from './components/Projects'
import { TabContext } from './Context/TabContext'
import { Footer } from './components/Footer'
import { Packages } from './components/Packages'

import GlobalStyles from './styles/GlobalStyles'
import styled, { ThemeProvider } from 'styled-components'
const Container = styled.div`
  display: flex;
`

const TabWrapper = styled.div`
  flex-basis: 66%;
`

function App() {
  const { selectedTab } = useContext(TabContext)
  const tabs = {
    repositories: <Repositories />,
    overview: <RepositoriesData />,
    projects: <Projects />,
    packages: <Packages />
  }

  const dark = {
    font: '#fff',
    fontPrimary: '#fff',
    bg: '#242424',
    border: 'rgba(0,0,0,0)',
    icon: '#e3e3e3',
    bgSecondary: '#363636'
  }

  const light = {
    font: '#fff',
    fontPrimary: '#24292e',
    bg: '#fff',
    border: '#e1e4e8',
    icon: '#6a737d',
    bgSecondary: '#fff'
  }
  const [darkMode, setDarkMode] = useState(false)
  return (
    <div className='App'>
      <ThemeProvider theme={darkMode ? dark : light}>
        <NavBar mode={darkMode} setMode={setDarkMode} />
        <ToolsNavBar />
        <Container>
          <Profile />
          <TabWrapper>{tabs[selectedTab]}</TabWrapper>
        </Container>

        <GlobalStyles />
      </ThemeProvider>
      <Footer />
    </div>
  )
}

export default App
