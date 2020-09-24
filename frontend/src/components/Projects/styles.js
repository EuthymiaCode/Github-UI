import styled, { css } from 'styled-components'
import { expandMenu } from '../Repositories/styles'
import { GoSearch, GoProject, GoCheck } from 'react-icons/go'
import { HiCheck } from 'react-icons/hi'
import { RiArrowDownSFill } from 'react-icons/ri'

export const Container = styled.div`
  padding: 0px 16px;
`

export const Wrapper = styled.div`
  margin-top: 16px;

  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
  }
`

export const Input = styled.div`
  background: var(--bg-secondary);
  line-height: 20px;
  color: var(--font-primary);
  border: 1px solid var(--border-color);
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex: 0.6;

  input {
    flex: 1;
  }
`

export const SearchIcon = styled(GoSearch)`
  margin: 0px 7px 0px 5px;
  width: 16px;
  height: 16px;
`

export const NewProjectButton = styled.button`
  padding: 5px 16px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  white-space: nowrap;
  cursor: pointer;
  border: 1px solid;
  border-radius: 6px;

  color: #fff;
  background-color: #2ea44f;
  border-color: #1b1f2326;
  box-shadow: 0 1px 0 rgba(27, 31, 35, 0.1),
    inset 0 1px 0 hsla(0, 0%, 100%, 0.03);
`

export const BoxContainer = styled.div`
  border-radius: 6px;
  border: 1px solid var(--border-color);
  display: flex;
  flex-direction: column;
  align-items: stretch;
  header {
    display: flex;
    justify-content: space-between;
    border-radius: 6px;

    padding: 16px;
    background-color: var(--bg-secondary);
    border-bottom: 1px solid var(--border-color);
  }

  section {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 32px;
    color: var(--font-primary);
    h3 {
      margin-bottom: 4px;
      font-weight: 600;
      font-size: 20px;
    }
  }
`

export const ProjectButton = styled.button`
  padding: 5px 16px;
  margin: 16px 0;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  white-space: nowrap;
  cursor: pointer;
  border: 1px solid;
  border-radius: 6px;

  color: #fff;
  background-color: #2ea44f;
  border-color: #1b1f2326;
  box-shadow: 0 1px 0 rgba(27, 31, 35, 0.1),
    inset 0 1px 0 hsla(0, 0%, 100%, 0.03);
`

export const LeftSide = styled.div`
  span {
    font-size: 14px;
  }
  color: var(--font-primary);
  &:nth-child(2) {
    font-weight: 600;
  }
`

const iconCSS = css`
  width: 16px;
  height: 16px;
  margin-right: 4px;
`

export const ProjectsIcon = styled(GoProject)`
  ${iconCSS}
`

export const CheckIcon = styled(HiCheck)`
  ${iconCSS}
`

export const RightSide = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  padding: 0px 15px;
  font-size: 14px;
  color: var(--font-primary);
`

export const SortMenu = styled.ul``

export const ArrowDown = styled(RiArrowDownSFill)`
  ${iconCSS}
`

export const Link = styled.a`
  color: #0366d6;
  text-decoration: none;
  cursor: pointer;
  font-size: 14px;
  line-height: 1.5;
  margin-bottom: 10px;

  &:hover {
    text-decoration: underline;
  }
`

export const CheckMark = styled(GoCheck)`
  opacity: ${({ visible }) => (visible ? '1' : '0')};
  margin-right: 10px;
  fill: var(--font-primary);
  width: 16px;
  height: 16px;
`
export const DropdownMenu = styled.ul`
  list-style: none;
  cursor: pointer;
  border-radius: 0.6em;
  display: ${({ open }) => (open ? 'block' : 'none')};
  height: auto;
  animation: ${expandMenu} 0.2s ease;
  border: 1px solid #bbb;
  position: absolute;

  top: 26px;
  right: 0;
  background-color: ${({ theme }) => theme.bg};
  padding: 1px 1px;
  div.dropdown-header {
    display: flex;
    justify-content: space-between;
    padding: 0 10px;
    align-items: center;
    height: 33px;
    width: 298px;
    font-weight: 500;
  }

  li {
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    cursor: pointer;
    border-top: 0.5px solid #ddd;
    height: 33px;
    width: 298px;
    &:hover {
      filter: brightness(90%);
    }
  }
`
