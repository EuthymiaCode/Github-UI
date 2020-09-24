import styled from 'styled-components'
import { GoMarkGithub } from 'react-icons/go'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 12px;

  padding: 40px 16px 20px 16px;
  margin: 40px 54px 20px 54px;
  border-top: 1px solid var(--border-color);
  p {
    color: var(--font-primary);
  }
  div {
    padding: 0px 70px;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }
  }
`

export const Link = styled.a`
  color: var(--link-color);
  font-size: 12px;

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
