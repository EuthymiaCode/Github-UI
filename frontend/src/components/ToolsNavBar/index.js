import React, { useContext } from 'react'
import {
  NavBarContainer,
  SubContainer,
  OverviewIcon,
  RepositoriesIcon,
  ProjectsIcon,
  PackagesIcon
} from './styles'
import { TabContext } from '../../Context/TabContext'

export function ToolsNavBar() {
  const { selectedTab, setTab } = useContext(TabContext)

  return (
    <>
      <NavBarContainer>
        <SubContainer
          id='overview'
          selected={selectedTab === 'overview' ? true : false}
          onClick={({ target }) => {
            setTab(target.id)
          }}>
          <OverviewIcon id='overview' />
          <button id='overview'>Overview</button>
        </SubContainer>

        <SubContainer
          id='repositories'
          selected={selectedTab === 'repositories' ? true : false}
          onClick={({ target }) => {
            setTab(target.id)
          }}>
          <RepositoriesIcon id='repositories' />
          <button id='repositories'>Repositories</button>
        </SubContainer>

        <SubContainer
          id='projects'
          selected={selectedTab === 'projects' ? true : false}
          onClick={({ target }) => {
            setTab(target.id)
          }}>
          <ProjectsIcon id='projects' />
          <button id='projects'>Projects</button>
        </SubContainer>

        <SubContainer
          id='packages'
          selected={selectedTab === 'packages'}
          onClick={({ target }) => {
            setTab(target.id)
          }}>
          <PackagesIcon id='packages' />
          <button id='packages'>Packages</button>
        </SubContainer>
      </NavBarContainer>
    </>
  )
}
