import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  margin-top: 30px;
  padding: 8px 13px;
  height: auto;
  border-radius: 0.4em;
  border: 1px solid var(--border-color);
  justify-content: flex-start;
  overflow: hidden;
`

export const Col = styled.div`
  display: flex;
  flex-direction: column;
`
export const Square = styled.span`
  background-color: ${({ color }) =>
    color < 20 || color > 70 ? '#eee' : `#00${color}00`};
  height: 11px;
  width: 11px;
  max-height: 11px;
  max-width: 11px;
  border-radius: 2px;
  margin: 2px 0;
`
