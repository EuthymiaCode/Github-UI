import styled from 'styled-components'
import { GoMarkGithub, GoPlus, GoBell, GoSignOut } from 'react-icons/go'
import { RiArrowDownSFill } from 'react-icons/ri'
import { AiOutlineMenu } from 'react-icons/ai'

export const Container = styled.div`
  background-color: var(--navBar);
  color: var(--font-color);
  height: 53px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 11px 2px;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    height: auto;

    padding: 16px 15px;
    margin-bottom: 45px;
  }
`

export const MenuIcon = styled(AiOutlineMenu)`
  height: 26px;
  width: auto;
  color: rgba(224, 224, 224, 0.8);
  cursor: pointer;
  flex-shrink: 0;
  &:hover {
    opacity: 0.6;
  }
  @media (min-width: 768px) {
    display: none;
  }
`

export const LeftSubContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: start;
  padding-left: 20px;

  .NavBarButton {
    color: var(--font-color);
    background-color: var(--navBar);
    cursor: pointer;

    margin: 0px 10px;
    font-weight: 300;
    font-size: 14px;
    font-family: Roboto;
    text-align: left;
  }

  .NavBarButton:hover {
    opacity: 0.6;
  }

  @media (max-width: 768px) {
    display: ${({ open }) => (open ? 'flex' : 'none')};
    flex-direction: column;
    padding: 0;
    padding-top: 10px;
    flex-basis: 100%;
    order: 6;
    background-color: var(--navbar);
    align-items: stretch;
    .NavBarButton {
      padding: 9px 0;
      text-align: left;
      border-top: 0.6px solid rgba(68, 68, 68, 1.4);
      margin: 0;
    }
  }
`

export const GitHubIcon = styled(GoMarkGithub)`
  margin-left: 20px;
  height: 100%;
  width: auto;
  flex-shrink: 0;
  cursor: pointer;
  @media (max-width: 768px) {
    margin-left: 0;
    height: 36px;
  }
`

export const RightIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-basis: 7%;
  padding-right: 16px;
  @media (max-width: 768px) {
    order: 7;
    background-color: var(--navbar);
    display: none;
    flex-direction: column;
  }
`

export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  flex-basis: 30%;
  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 12px;
    justify-content: start;
    background-color: var(--navbar);
  }
`

export const PlusIcon = styled(GoPlus)`
  width: 14px;
  height: 14px;
  opacity: 0.8;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
`

export const PlusIconWrapper = styled.span`
  width: 33px;
  @media (max-width: 768px) {
    display: none;
  }
`

export const BellIcon = styled(GoBell)`
  height: 16px;
  width: 16px;
  cursor: pointer;
  margin-bottom: 3px;
  margin-right: 16px;
  flex-shrink: 0;
  &:hover {
    opacity: 0.6;
  }
`

export const ProfileIcon = styled.div`
  width: auto;
  height: auto;
  cursor: pointer;
  display: flex;

  align-items: center;

  img {
    border-radius: 10em 10em;
    width: 18px;
    height: 18px;
  }
`

export const ArrowDown = styled(RiArrowDownSFill)`
  height: 15px;
  width: 15px;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
  @media (max-width: 768px) {
    display: none;
  }
`

export const SearchBar = styled.input`
  height: 28px;

  padding: 5px 8px;
  flex-basis: 25%;
  background-color: rgb(255, 255, 255, 0.14);
  border-radius: 0.5em;
  font-size: 1.1rem;
  cursor: auto;

  transition: flex-basis 0.3s ease-out;

  &:focus {
    flex-basis: 50%;
    background-color: var(--font-color);
    color: #000;

    &::placeholder {
      color: #444;
      font-weight: 150;
    }
  }

  &::placeholder {
    line-height: 12px;
    color: #e1e4e8;
    font-weight: 150;
  }
  @media (max-width: 768px) {
    align-self: stretch;
    padding: 7px 8px;
    height: 38px;
    &:focus {
      flex-basis: initial;
    }
  }
`
export const ProfileLink = styled.button`
  color: var(--font-color);
  background-color: var(--navBar);
  cursor: pointer;
  font-weight: 300;
  font-size: 14px;
  font-family: Roboto;
  text-align: left;
  padding: 9px 0;
  text-align: left;
  border-top: 0.6px solid rgba(68, 68, 68, 1.4);
  margin: 0;
  display: flex;
  align-items: center;
  &:hover {
    opacity: 0.6;
  }

  img {
    border-radius: 10em 10em;
    width: 18px;
    height: 18px;
    margin-right: 5px;
  }
  @media (min-width: 768px) {
    display: none;
  }
`

export const IconPopover = styled.div`
  position: absolute;
  top: 45px;
  border-radius: 0.6em;
  border: 0.5px solid #bbb;
  right: ${({ right }) => right};
  background-color: #fff;
  color: #000;
  padding: 6px 6px;
  width: 120px;
  display: ${({ open }) => (open ? 'block' : 'none')};
`

export const SignOut = styled(GoSignOut)`
  height: 18px;
  width: auto;
  margin-right: 5px;
`
