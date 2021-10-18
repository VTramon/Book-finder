import { FormEvent, useCallback, useState } from 'react'
import styled from 'styled-components'

const Box = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  width: 100vw;
  background-color: ${(props) => props.theme.colors.backgroundFooter};
  border-bottom: 1px solid #9e9e9e;
`

const SearchForm = styled.form`
  display: flex;
  width: 45vw;
  height: 30px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.backgroundInput};
  border-bottom: 1px solid black;
  border-right: 1px solid black;
`

const SearchInput = styled.input`
  display: inherit;
  width: inherit;
  height: inherit;
  border-radius: inherit;
  background-color: inherit;
  border-bottom: inherit;
  border-right: inherit;
  padding: 5px;
`

interface HeaderProps {
  callbackSearch: Function
}

const Header: React.FC<HeaderProps> = ({ callbackSearch }) => {
  const [search, setSearch] = useState('')
  const handleSubmit = useCallback(
    async (event: FormEvent) => {
      event.preventDefault()
      callbackSearch(search)
      return
    },
    [search, callbackSearch]
  )

  return (
    <Box>
      <SearchForm onSubmit={(e) => handleSubmit(e)}>
        <SearchInput
          type="text"
          placeholder="qual livro deseja buscar?"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </SearchForm>
    </Box>
  )
}

export default Header
