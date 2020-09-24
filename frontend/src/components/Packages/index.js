import React from 'react'

import { Container, Link } from './styles'

export const Packages = () => {
  return (
    <Container>
      <img
        src='https://github.githubassets.com/images/icons/registry-marketing-icon.svg'
        alt='imagem'
      />
      <h1>There aren’t any packages here</h1>
      <p>With GitHub Packages you can safely publish and consume packages.</p>
      <p>
        <Link>Learn more</Link> about GitHub Packages
      </p>
    </Container>
  )
}
