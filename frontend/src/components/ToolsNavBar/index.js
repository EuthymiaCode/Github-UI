import React from 'react'
import {
  NavBarContainer,
  SubContainer,
  OverviewIcon,
  RepositoriesIcon,
  ProjectsIcon,
  PackagesIcon,
  BotSide,
  Avatar
} from './styles'

export function ToolsNavBar() {
  return (
    <>
      <NavBarContainer>
        <SubContainer>
          <OverviewIcon />
          <p>Overview</p>
        </SubContainer>

        <SubContainer>
          <RepositoriesIcon />
          <p>Repositories</p>
        </SubContainer>

        <SubContainer>
          <ProjectsIcon />
          <p>Projects</p>
        </SubContainer>

        <SubContainer>
          <PackagesIcon />
          <p>Packages</p>
        </SubContainer>
      </NavBarContainer>

      <BotSide>
        <Avatar />
      </BotSide>
    </>
  )
}
