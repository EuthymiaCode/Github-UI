import React from 'react'
import {
  Container,
  Avatar,
  Name,
  Button,
  UserData,
  FollowersIcon,
  StarIcon,
  UserInformation,
  Organizations,
  LocationIcon,
  EmailIcon
} from './styles'

export function Profile() {
  return (
    <>
      <Container>
        <Avatar>
          <img
            src='https://avatars0.githubusercontent.com/u/4098258?s=460&u=0889dc958909489747cda7257f08b20ad4886678&v=4'
            alt='pessoa'
          />
        </Avatar>
        <Name>
          <strong> Gabriel Takuya Yamamoto </strong>
          <p> Takkuya </p>
        </Name>

        <p>
          Estudando Desenvolvimento de Sistemas na ETEC Professor Camargo
          Aranha.
        </p>

        <Button>Edit Profile</Button>

        <UserData>
          <span>
            <p>
              <FollowersIcon /> <strong>9</strong> followers ·
            </p>
          </span>

          <span>
            <p>
              <strong>20</strong> following ·
            </p>
          </span>

          <span>
            <StarIcon />
            <strong> 14 </strong>
          </span>
        </UserData>

        <UserInformation>
          <span>
            <p>
              <LocationIcon /> Localização
            </p>
          </span>

          <span>
            <p>
              <EmailIcon />
              pipipi@popopo.com
            </p>
          </span>
        </UserInformation>

        <Organizations>
          <strong> Organizations </strong>
        </Organizations>
      </Container>
    </>
  )
}
