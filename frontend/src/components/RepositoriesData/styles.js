import styled, { css } from 'styled-components'

import { RiBookMarkLine, RiStarLine } from 'react-icons/ri'
import { AiOutlineFork } from 'react-icons/ai'

export const Container = styled.div`
  display: flex;
`
export const BotSide = styled.div``
export const TopSide = styled.div``
export const Link = styled.a`
  font-size: 14px;
  font-weight: 600;
  color: #0366d6;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`

const iconCSS = css`
  width: 16px;
  height: 16px;
  fill: var(--icon);
  flex-shrink: 0;
`

export const RepoIcon = styled(RiBookMarkLine)`
  ${iconCSS}
`
export const StarIcon = styled(RiStarLine)`
  ${iconCSS}
`
export const ForkIcon = styled(AiOutlineFork)`
  ${iconCSS}
`

// export const LangColor = styled.div`
//   background-color: ${({ color }) => color};
//   border-radius: 10em;
//   width: 12px;
//   height: 12px;
//   margin-right: 4px;
// `
// const colors = {
//   Javascript: '#f1e05a',
//   Typescript: '#2b7489'
// }
