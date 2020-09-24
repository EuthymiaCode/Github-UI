import React from 'react'
import getRepos from '../../Context/RepoContext'
import CommitGrid from '../CommitGrid'
import {
  Container,
  Cards,
  RepoWrapper,
  LangColor,
  StarIcon,
  RepoIcon
} from './styles'

const colors = {
  Javascript: '#f1e05a',
  Typescript: '#2b7489'
}

export function RepositoriesData() {
  const repos = getRepos()

  return (
    <Container>
      <div>
        <h2>Pinned</h2>
        <h3>Customize your pins</h3>
      </div>
      <Cards>
        {repos
          .slice(0, 6)
          .map(({ name, description, language, stars }, index) => (
            <RepoWrapper key={index}>
              <a href={() => false}>
                <RepoIcon />
                {name}
              </a>
              <p>{description}</p>
              <span>
                <LangColor color={colors[language]} /> {language}
                <span>
                  <StarIcon />
                  {stars}
                </span>
              </span>
            </RepoWrapper>
          ))}
      </Cards>
      <CommitGrid />
    </Container>
  )
}
