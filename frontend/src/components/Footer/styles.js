import styled from 'styled-components'
import { GoMarkGithub } from 'react-icons/go'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 12px;

  padding: 40px 16px 40px 16px;
  margin: 40px 54px 40px 54px;
  border-top: 1px solid var(--border-color);

  div {
    padding: 0px 70px;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }
`

export const Link = styled.a`
  color: #0366d6;
  font-size: 12px;
  padding: 0px 30px 0px 30px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`
export const GitHubIcon = styled(GoMarkGithub)`
  width: 24px;
  height: 24px;
  color: #c6cbd1;
`
