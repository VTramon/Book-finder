import styled from 'styled-components'

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  max-height: 100vh;
  width: 100vw;
  height: 100vh;
  justify-content: space-between;
  background-color: ${(props) => props.theme.colors.backgroundLayout};
  color: ${(props) => props.theme.colors.wordColor};
`

export const BookContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: auto;
  width: 100vw;
  flex-wrap: wrap;
`
