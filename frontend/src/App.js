import React from 'react'
import { NavBar } from './components/NavBar'
import { ToolsNavBar } from './components/ToolsNavBar'
import GlobalStyles from './styles/GlobalStyles'

function App() {
  return (
    <div className='App'>
      <NavBar />
      <ToolsNavBar />
      <GlobalStyles />
    </div>
  )
}

export default App
