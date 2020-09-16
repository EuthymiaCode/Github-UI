import React from 'react'
import getRepos from '../../Context/RepoContext'
import { RepoCard, RepoSearchBar } from './RepoComponents'

import { Container } from './styles'

export default function Repositories() {
  const repos = getRepos()

  return (
    <Container>
      <RepoSearchBar />
      {repos.map((repo, index) => (
        <RepoCard {...repo} key={index} />
      ))}
    </Container>
  )
}
