import styled from 'styled-components'
import { GoBook, GoRepo, GoProject, GoPackage } from 'react-icons/go'

export const NavBarContainer = styled.div`
  font-size: 20px;

  display: flex;
  flex-direction: row;
  justify-content: center;

  height: 75px;

  border: 1px solid var(--line-color);
`

export const SubContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 20px 16px 0px 16px;

  font-size: 14px;
  font-weight: 300;
  color: var(--font-primary);

  svg {
    margin-right: 5px;
  }

  p {
    margin: 0 5px;
  }
`

export const RepositoriesIcon = styled(GoRepo)``

export const ProjectsIcon = styled(GoProject)``

export const PackagesIcon = styled(GoPackage)``

export const OverviewIcon = styled(GoBook)``

export const BotSide = styled.div`
  margin-top: 20px;

  display: flex;
  align-items: center;
`

export const Avatar = styled.div`
  width: 39px;
  height: 39px;
  flex-shrink: 0;
  border-radius: 50%;
  background: var(--font-primary);
`
