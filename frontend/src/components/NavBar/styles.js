import React from 'react'

import styled from 'styled-components'
import { GoMarkGithub, GoPlus, GoBell, GoSignOut } from 'react-icons/go'
import { RiArrowDownSFill } from 'react-icons/ri'
import { AiOutlineMenu } from 'react-icons/ai'
import { MdBrightnessMedium } from 'react-icons/md'
const OcticonSmiley = () => (
  <svg
    class='octicon octicon-smiley'
    viewBox='0 0 16 16'
    version='1.1'
    width='16'
    height='16'
    aria-hidden='true'>
    <path
      fill-rule='evenodd'
      d='M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM5 8a1 1 0 100-2 1 1 0 000 2zm7-1a1 1 0 11-2 0 1 1 0 012 0zM5.32 9.636a.75.75 0 011.038.175l.007.009c.103.118.22.222.35.31.264.178.683.37 1.285.37.602 0 1.02-.192 1.285-.371.13-.088.247-.192.35-.31l.007-.008a.75.75 0 111.222.87l-.614-.431c.614.43.614.431.613.431v.001l-.001.002-.002.003-.005.007-.014.019a1.984 1.984 0 01-.184.213c-.16.166-.338.316-.53.445-.63.418-1.37.638-2.127.629-.946 0-1.652-.308-2.126-.63a3.32 3.32 0 01-.715-.657l-.014-.02-.005-.006-.002-.003v-.002h-.001l.613-.432-.614.43a.75.75 0 01.183-1.044h.001z'></path>
  </svg>
)

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
`

export const PlusIconWrapper = styled.span`
  width: 33px;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }

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
  &:hover {
    opacity: 0.6;
  }
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
      flex-basis: 25%;
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
  border-radius: 0.5em;
  border: 1px solid #bbb;
  right: ${({ right }) => right};
  background-color: var(--bg);
  color: var(--font-primary);
  width: 160px;
  font-size: 14px;
  display: ${({ open }) => (open ? 'block' : 'none')};
  padding: 4px 0;
  ul {
    padding: 4px 0px;
    list-style: none;
  }

  li {
    padding: 4px 8px 4px 16px;
    cursor: pointer;
  }

  li:hover {
    background-color: #0366d6;
    color: white;
  }

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 6px;
    border-bottom: 1px solid #bbb;
  }

  span:first-child {
    font-weight: 700;
    margin-left: 2px;
  }
  button {
    border: 1px solid #bbb;
    padding: 6px 6px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-radius: 0.5em;
    width: 80%;

    cursor: pointer;
    span {
      margin-left: 5px;
    }

    &:hover {
      color: #0366d6;
      fill: #0366d6;
    }
  }
`
export const DarkMode = styled(MdBrightnessMedium)``

export const Smiley = styled(OcticonSmiley)`
  color: var(--font-primary);
  fill: var(--font-primary);
`

export const SignOut = styled(GoSignOut)`
  height: 18px;
  width: auto;
  margin-right: 5px;
`
