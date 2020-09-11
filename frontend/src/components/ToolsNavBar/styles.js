import styled, { css } from 'styled-components'
import { GoBook, GoRepo, GoProject, GoPackage } from 'react-icons/go'

export const NavBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 75px;

  border-bottom: 1px solid var(--line-color);
`

export const SubContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 20px 16px 0px 16px;

  height: 76px;
  font-size: 18px;
  font-weight: 600;
  color: var(--font-primary);
  border-bottom: ${({ selected }) =>
    selected
      ? '2px solid var(--dashboard-perfil)'
      : '1px solid var(--line-color)'};

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
