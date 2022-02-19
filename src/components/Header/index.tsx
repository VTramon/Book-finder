import { FormEvent, useCallback, useState } from 'react'
import { Box, SearchForm, SearchInput } from './styles'
import { HeaderProps } from './types'

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
