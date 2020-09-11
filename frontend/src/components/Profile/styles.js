import styled, { css } from 'styled-components'
import { GoPerson, GoStar, GoLocation } from 'react-icons/go'
import { FiMail } from 'react-icons/fi'

export const Container = styled.div`
  width: 312px;
  display: flex;
  flex-direction: column;
  color: var(--font-primary);
  margin: 20px 5px 0px 60px;

  span {
    font-size: 20px;

    padding: 0px 0px 16px 0px;
  }

  p {
    font-size: 16px;
    padding-bottom: 25px;
  }
`

export const Avatar = styled.div`
  margin-bottom: 15px;

  > img {
    height: 260px;
    flex-shrink: 0;
    border-radius: 50%;
  }
`

export const Name = styled.div`
  padding-bottom: 30px;

  > strong {
    font-size: 26px;
    font-weight: bold;
    line-height: 1.25;
  }

  > p {
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: 24px;
    color: #666;
  }
`

export const Button = styled.button`
  color: var(--navBar);
  background-color: var(--btn-background);
  border: 1px solid #1b1f2326;
  font-size: 14px;
  font-weight: 500;
  margin: 0px 0px 16px;
  padding: 5px 16px;
  height: 32px;
  width: 280px;
  border-radius: 7px;
  box-shadow: 0 1px 0 rgba(27, 31, 35, 0.04),
    inset 0 1px 0 hsla(0, 0%, 100%, 0.25);

  &:hover {
  }
`

export const UserData = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  span {
    font-size: 14px;
  }

  strong {
    font-size: 14px;
  }

  p {
    font-size: 14px;
  }
`
const iconCSS = css`
  margin: 3px 0px 0px -22px;
  height: 16px;
  width: 16px;
`

export const UserInformation = styled.div`
  border-bottom: 1px solid var(--dashboard-perfil);
  p {
    font-size: 14px;
  }
`

export const FollowersIcon = styled(GoPerson)`
  height: 16px;
  width: 16px;
`

export const StarIcon = styled(GoStar)`
  width: 16px;
  height: 16px;
`

export const LocationIcon = styled(GoLocation)`
  ${iconCSS}
`
export const EmailIcon = styled(FiMail)`
  ${iconCSS}
`
