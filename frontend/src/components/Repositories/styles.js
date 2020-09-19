import styled from 'styled-components'
import { GoStar, GoCheck } from 'react-icons/go'
import { CgClose } from 'react-icons/cg'
import { RiBookMarkLine } from 'react-icons/ri'
export const Container = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  flex-direction: column;
  width: 80%;
  color: var(--font-primary);
`
export const RepoCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-basis: 29%;
  padding: 20px 0;
  border-top: 1px solid var(--line-color);
  a {
    font-size: 2rem;
    color: #0366d6;
    font-weight: 600;
    cursor: pointer;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  span {
    display: flex;
    justify-content: space-between;
    margin-top: 12px;
  }
  h4 {
    align-self: flex-start;
    display: flex;
    color: #586069;
    font-weight: 400;
    font-size: 1.2rem;
  }
  p {
    color: #586069;
    font-size: 1.4rem;
  }

  button {
    border: 1px solid #bbb;
    padding: 6px 6px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-radius: 0.5em;
    margin-right: 12px;
    padding: 3px 12px;
    color: var(--navBar);
    fill: var(--font-primary);
    cursor: pointer;
    &:hover {
      filter: brightness(90%);
    }
  }
`
export const LangColor = styled.div`
  background-color: ${({ color }) => color};
  border-radius: 10em;
  width: 12px;
  height: 12px;
  margin-right: 4px;
`
export const ActivityBar = styled.div`
  border-bottom: 1px solid rgb(155, 233, 168);
  width: 150px;
  margin-right: 12px;
  margin-top: 6px;
`
// rgb(155, 233, 168)
export const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 65px;
  input {
    height: 32px;

    padding: 5px 16px;
    flex: 0.8;
    border: 1px solid #bbb;
    border-radius: 0.5em;
    font-size: 1.4rem;
    cursor: auto;
    vertical-align: middle;

    &:focus {
      color: #000;
      border-color: #0366d6;
      box-shadow: 0 0 0 3px rgba(3, 102, 214, 0.3);
    }

    &::placeholder {
      color: #333;
    }
  }
`
export const Button = styled.button`
  border: 1px solid #bbb;
  padding: 6px 6px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-radius: 0.5em;
  margin-right: 12px;
  padding: 5px 16px;
  color: var(--navBar);
  fill: var(--font-primary);
  height: 32px;
  cursor: pointer;
  position: relative;
  background-color: ${({ open }) => (open ? '#ccc' : 'inherit')};
  &:hover {
    background-color: #ccc;
  }
`

export const DropdownMenu = styled.ul`
  list-style: none;
  cursor: default;
  border-radius: 0.6em;
  display: ${({ open }) => (open ? 'block' : 'none')};
  height: ${({ open }) => (open ? 'auto' : '0')};

  transition: height 2s linear;
  border: 1px solid #bbb;
  position: absolute;

  top: 46px;
  right: 0;
  background-color: ${({ theme }) => theme.bg};
  padding: 1px 1px;
  header {
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

export const CheckMark = styled(GoCheck)`
  opacity: ${({ visible }) => (visible ? '1' : '0')};
  margin-right: 10px;
  fill: black;
  width: 16px;
  height: 16px;
`
export const StarIcon = styled(GoStar)`
  width: 16px;
  height: 16px;
  color: inherit;
`
export const RepoIcon = styled(RiBookMarkLine)`
  width: 22px;
  height: 22px;
  fill: #fff;
  flex-shrink: 0;
`
export const CloseIcon = styled(CgClose)`
  width: 16px;
  height: 16px;
  color: var(--icon);
  cursor: pointer;
  &:hover {
    fill: black;
    color: black;
  }
`
