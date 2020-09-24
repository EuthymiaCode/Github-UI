import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  border: 1px solid var(--border-color);
  border-radius: 0.5em;

  padding: 80px 40px;
  margin-top: 32px;
  color: var(--font-primary);
  width: 902px;
  height: 323px;

  h1 {
    font-size: 20px;
    font-weight: 500;
    line-height: 2em;
  }

  img {
    height: 56px;
    width: 56px;
  }
`

export const Link = styled.a`
  color: var(--link-color);

  &:hover {
    text-decoration: underline;
  }
`
