import React from 'react'
import { Container, Col, Square } from './styles'
export default function CommitGrid() {
  const randInt = (max = 99, min = 12) =>
    Math.round(Math.random() * (max - min) + min).toString()

  const Column = () => (
    <Col>
      <Square color={randInt()}></Square>
      <Square color={randInt()}></Square>
      <Square color={randInt()}></Square>
      <Square color={randInt()}></Square>
      <Square color={randInt()}></Square>
      <Square color={randInt()}></Square>
      <Square color={randInt()}></Square>
    </Col>
  )
  return (
    <Container>
      {Array(46)
        .fill(0)
        .map(num => (
          <Column />
        ))}
    </Container>
  )
}
