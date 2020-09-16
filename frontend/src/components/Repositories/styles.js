import styled from 'styled-components'
import { GoStar } from 'react-icons/go'
export const Container = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  flex-direction: column;
  width: 80%;
  color: var(--font-primary);
`
export const RepoCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-basis: 29%;
  padding: 20px 0;
  border-top: 1px solid var(--line-color);
  a {
    font-size: 2rem;
    color: #0366d6;
    font-weight: 600;
    cursor: pointer;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }

  span {
    display: flex;
    justify-content: space-between;
    margin-top: 12px;
  }
  h4 {
    align-self: flex-start;
    display: flex;
    color: #586069;
    font-weight: 400;
    font-size: 1.2rem;
  }
  p {
    color: #586069;
    font-size: 1.4rem;
  }

  button {
    border: 1px solid #bbb;
    padding: 6px 6px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-radius: 0.5em;
    margin-right: 12px;
    padding: 3px 12px;
    color: var(--navBar);
    fill: var(--font-primary);
  }
`
export const LangColor = styled.div`
  background-color: ${({ color }) => color};
  border-radius: 10em;
  width: 12px;
  height: 12px;
  margin-right: 4px;
`
export const ActivityBar = styled.div``
export const SearchBarContainer = styled.div``

export const StarIcon = styled(GoStar)`
  width: 16px;
  height: 16px;
  color: inherit;
`
