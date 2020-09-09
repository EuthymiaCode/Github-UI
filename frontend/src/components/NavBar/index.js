import React, { useState } from 'react'
import {
  Container,
  GitHubIcon,
  SearchBar,
  PlusIcon,
  BellIcon,
  LeftSubContainer,
  RightIcons,
  IconPopover,
  ArrowDown,
  ProfileIcon,
  PlusIconWrapper,
  Nav,
  MenuIcon,
  ProfileLink,
  SignOut
} from './styles'

export function NavBar() {
  const [iconOpen, setIconOpen] = useState({
    plus: false,
    profile: false
  })

  const [menuOpen, setMenuOpen] = useState(false)

  const handleIconOpen = ({ target }) => {
    if (target.id === 'plus') {
      setIconOpen({
        plus: !iconOpen.plus,
        profile: false
      })
    } else {
      setIconOpen({
        plus: false,
        profile: !iconOpen.profile
      })
    }
  }

  return (
    <Container>
      <MenuIcon onClick={() => setMenuOpen(!menuOpen)} />
      <GitHubIcon />
      <LeftSubContainer open={menuOpen}>
        <SearchBar placeholder='Search or jump to...' />
        <Nav>
          <button className='NavBarButton'>Pull requests</button>
          <button className='NavBarButton'>Issues</button>
          <button className='NavBarButton'>Marketplace</button>
          <button className='NavBarButton'>Explore</button>
          <ProfileLink>
            <img
              src='https://avatars0.githubusercontent.com/u/4098258?s=460&u=0889dc958909489747cda7257f08b20ad4886678&v=4'
              alt='Loba'
              id='profile'></img>
            Usuário
          </ProfileLink>
          <ProfileLink>
            <SignOut />
            Sign out
          </ProfileLink>
        </Nav>
      </LeftSubContainer>
      <BellIcon />
      <RightIcons open={menuOpen}>
        <PlusIconWrapper id='plus' onClick={e => handleIconOpen(e)}>
          <PlusIcon id='plus' onClick={e => handleIconOpen(e)} />
          <ArrowDown id='plus' onClick={e => handleIconOpen(e)} />
        </PlusIconWrapper>
        <IconPopover open={iconOpen.plus} right='80px'>
          asd
        </IconPopover>

        <ProfileIcon id='profile' onClick={e => handleIconOpen(e)}>
          <img
            src='https://avatars0.githubusercontent.com/u/4098258?s=460&u=0889dc958909489747cda7257f08b20ad4886678&v=4'
            alt='Loba'
            id='profile'></img>
          <ArrowDown id='profile' />
        </ProfileIcon>
        <IconPopover open={iconOpen.profile} right='18px'>
          asdasdasdasdasd
        </IconPopover>
      </RightIcons>
    </Container>
  )
}
