import styled, { css } from 'styled-components'
// import { GoPerson, GoStar, GoLocation } from 'react-icons/go'
// import { FiMail } from 'react-icons/fi'
import {
  RiGroupLine,
  RiStarLine,
  RiMapPin2Line,
  RiMailLine
} from 'react-icons/ri'

export const Container = styled.div`
  width: 312px;
  display: flex;
  flex-direction: column;
  color: var(--font-primary);
  margin: 20px 15px 0px 60px;

  span {
    font-size: 20px;

    padding: 0px 0px 16px 0px;
  }

  p {
    padding-bottom: 15px;
    font-size: 16px;
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
  padding: 16px 0px;

  > strong {
    font-size: 24px;
    font-weight: 500;
    line-height: 1.25;
  }

  > p {
    padding: 0;
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
  border: 1px solid var(--border-color);
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
  margin-bottom: 16px;

  width: 280px;
  height: 21px;

  span {
    font-size: 14px;
    margin: 0px 5px;
  }

  strong {
    font-size: 14px;
    font-weight: 500;
  }

  p {
    font-size: 14px;
  }
`
const iconCSS = css`
  margin: 3px 0px 0px -22px;
  height: 16px;
  width: 16px;
  fill: var(--icon);
`

export const UserInformation = styled.div`
  border-bottom: 1px solid var(--line-color);
  p {
    font-size: 14px;
    padding: 4px 0px 10px 22px;
  }
`
export const Organizations = styled.div`
  padding-top: 16px;
  margin-top: 16px;
`

export const FollowersIcon = styled(RiGroupLine)`
  height: 16px;
  width: 16px;
  fill: var(--icon);
`

export const StarIcon = styled(RiStarLine)`
  width: 16px;
  height: 16px;
  fill: var(--icon);
`

export const LocationIcon = styled(RiMapPin2Line)`
  ${iconCSS}
`
export const EmailIcon = styled(RiMailLine)`
  ${iconCSS}
`
