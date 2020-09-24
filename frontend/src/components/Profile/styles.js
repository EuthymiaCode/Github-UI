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
  background-color: transparent;
  display: flex;
  transform: translateY(-60px);
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
  padding: 16px 0;
  > img {
    height: 260px;
    flex-shrink: 0;
    border-radius: 50%;
  }
`

export const Name = styled.div`
  padding-bottom: 16px;

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
  cursor: pointer;
  color: var(--font-primary);
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-color);
  font-size: 14px;
  font-weight: 500;
  margin: 0px 0px 16px;
  padding: 5px 16px;
  height: 32px;
  width: 280px;
  border-radius: 7px;

  &:hover {
    filter: brightness(98%);
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
    cursor: pointer;
    &:hover {
      color: var(--link-color);
      fill: var(--link-color);
    }
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
`

export const UserInformation = styled.div`
  border-bottom: 1px solid var(--line-color);
  p {
    font-size: 14px;
    padding: 4px 0px 10px 22px;

    span {
      font-size: 14px;
      &:hover {
        color: var(--link-color);
        text-decoration: underline;
      }
    }
  }
`
export const Organizations = styled.div`
  margin-bottom: 8px;
  margin-top: 9px;

  strong {
    font-weight: 600;
    font-size: 16px;
  }
`

export const FollowersIcon = styled(RiGroupLine)`
  height: 16px;
  width: 16px;
`

export const StarIcon = styled(RiStarLine)`
  width: 16px;
  height: 16px;
`

export const LocationIcon = styled(RiMapPin2Line)`
  ${iconCSS}
  fill: var(--icon);
`
export const EmailIcon = styled(RiMailLine)`
  ${iconCSS}
  fill: var(--icon);
`
