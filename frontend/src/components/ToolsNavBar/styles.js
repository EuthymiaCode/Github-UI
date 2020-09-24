import styled, { css } from 'styled-components'
import { GoBook, GoRepo, GoProject, GoPackage } from 'react-icons/go'

export const NavBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: stretch;
  height: 75px;
  transform: translateX(-60px);

  border-bottom: 1px solid var(--border-color);
`

export const SubContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 20px 16px 0px 16px;

  font-size: 18px;
  font-weight: ${({ selected }) => (selected ? '300' : 'bold')};
  color: var(--font-primary);
  border-bottom: ${({ selected }) =>
    selected ? '2px solid var(--dashboard-perfil)' : ''};

  transition: var(--border-color);
  transition-timing-function: ease-out;
  transition-duration: 0.12s;

  &:hover {
    border-bottom: ${({ selected }) =>
      selected
        ? '2px solid var(--dashboard-perfil)'
        : '3px solid var(--border-color)'};
  }

  button {
    font-size: 14px;
    height: 100%;
    cursor: pointer;
    color: var(--font-primary);
  }
  svg {
    margin-right: 5px;
  }

  p {
    margin: 0 5px;
    font-size: 18px;
    font-weight: ${({ selected }) => (selected ? 'bold' : '300')};
    color: var(--font-primary);
  }
`

const iconCSS = css`
  font-size: 18px;
`
export const RepositoriesIcon = styled(GoRepo)`
  ${iconCSS}
`
export const ProjectsIcon = styled(GoProject)`
  ${iconCSS}
`
export const PackagesIcon = styled(GoPackage)`
  ${iconCSS}
`
export const OverviewIcon = styled(GoBook)`
  ${iconCSS}
`
