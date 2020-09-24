import styled, { css } from 'styled-components'

import { RiStarLine } from 'react-icons/ri'
import { AiOutlineFork } from 'react-icons/ai'
import { GoRepo } from 'react-icons/go'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  div {
    display: flex;
    justify-content: space-between;
    color: var(--font-primary);
  }

  h2 {
    font-size: 16px;
    font-weight: 370;

    padding: 20px 0px 0px 0px;
    margin-bottom: 8px;
  }

  h3 {
    padding-top: 20px;
    font-size: 13px;
    color: ${({ theme }) => (theme.bg === '#fff' ? '#586069' : '#fff')};
    font-weight: 400;
    cursor: pointer;

    &:hover,
    &:focus {
      color: var(--link-color);
    }
  }

  p {
    font-size: 16px;
    font-weight: 370;

    margin-bottom: 8px;
  }
`

export const Link = styled.a`
  font-size: 14px;
  font-weight: 600;
  color: #0366d6;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`

const iconCSS = css`
  width: 16px;
  height: 16px;
  flex-shrink: 0;
`

export const RepoIcon = styled(GoRepo)`
  ${iconCSS}
  fill: var(--icon);
  color: var(--icon);
  padding-right: 3px;
`
export const StarIcon = styled(RiStarLine)`
  ${iconCSS}
  margin-left: 26px;
`
export const ForkIcon = styled(AiOutlineFork)`
  ${iconCSS}
  fill: var(--icon);
`

export const LangColor = styled.div`
  background-color: ${({ color }) => color};
  border-radius: 10em;
  width: 12px;
  height: 12px;
  margin-right: 4px;
  display: inline-block;
`

export const Cards = styled.div`
  display: flex;
  align-items: stretch;
  flex-wrap: wrap;
  align-content: space-between;
  justify-content: space-evenly;
  height: calc(130px * 3 + 40px);
`

export const RepoWrapper = styled.div`
  height: 133px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-basis: 48%;
  border-radius: 0.5em;
  border: 1.5px solid var(--border-color);
  padding: 16px 16px;
  background-color: ${({ theme }) => theme.bgSecondary};
  color: ${({ theme }) => (theme.bg === '#fff' ? '#586069' : '#fff')};

  a {
    font-size: 1.4rem;
    color: #0366d6;
    font-weight: 600;
    cursor: pointer;
    text-decoration: none;
    padding-bottom: 3px;

    display: flex;
    align-items: center;
    &:hover {
      text-decoration: underline;
    }
  }

  p {
    font-size: 1.2rem;
  }

  span {
    font-size: 1.2rem;

    display: flex;
    align-items: center;

    span {
      &:hover,
      &:focus {
        color: var(--link-color);
        fill: var(--link-color);
        cursor: pointer;
        fill: var(--link-color);
        fill: var(--link-color);
        fill: var(--link-color);
        fill: var(--link-color);
        fill: var(--link-color);
        fill: var(--link-color);
        fill: var(--link-color);
      }
    }
  }
`
