import styled from 'styled-components'

export const Box = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  width: 100vw;
  background-color: ${(props) => props.theme.colors.backgroundHeader};
  border-bottom: 1px solid #9e9e9e;
`

export const SearchForm = styled.form`
  display: flex;
  width: 45vw;
  height: 30px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.backgroundInput};
  border-bottom: 1px solid black;
  border-right: 1px solid black;
`

export const SearchInput = styled.input`
  display: inherit;
  width: inherit;
  height: inherit;
  border-radius: inherit;
  background-color: inherit;
  border-bottom: inherit;
  border-right: inherit;
  padding: 5px;
`
