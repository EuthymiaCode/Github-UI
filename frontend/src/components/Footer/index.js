import React from 'react'
import { Container, Link, GitHubIcon } from './styles'

export function Footer() {
  return (
    <Container>
      <p>© 2020 GitHub, Inc</p>
      <Link>Terms</Link>
      <Link>Privacy</Link>
      <Link>Security</Link>
      <Link>Status</Link>
      <Link>Help</Link>
      <div>
        <GitHubIcon />
      </div>
      <Link>Contact GitHub</Link>
      <Link>Pricing</Link>
      <Link>API</Link>
      <Link>Training</Link>
      <Link>Blog</Link>
      <Link>About</Link>
    </Container>
  )
}
