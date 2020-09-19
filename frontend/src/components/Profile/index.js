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
            src='https://transamericagv.com.br/wp-content/uploads/2020/06/3352087-whindersson-nunes-reage-a-foto-de-influe-624x600-1.jpg'
            alt='pessoa'
          />
        </Avatar>
        <Name>
          <strong> Whinderson Nunes </strong>
          <p> Nudes </p>
        </Name>

        <p>Fazendo coisas sem graça e ganhando milhões de inscritos.</p>

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
