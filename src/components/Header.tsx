import styled from 'styled-components';

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  width: 100vw;
  background-color: ${(props) => props.theme.colors.backgroundHeader};
`;

const SearchForm = styled.form`
  display: flex;
  width: 45vw;
  height: 30px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colors.backgrounInput};
  border-bottom: 1px solid black;
  border-right: 1px solid black;
`;

const SearchInput = styled.input`
  display: inherit;
  width: inherit;
  height: inherit;
  border-radius: inherit;
  background-color: inherit;
  border-bottom: inherit;
  border-right: inherit;
  padding: 5px;
`;

const Header = () => {
  return (
    <Box>
      <SearchForm action="">
        <SearchInput type="text" placeholder="qual livro deseja buscar?" />
      </SearchForm>
    </Box>
  );
};

export default Header;
