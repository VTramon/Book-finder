import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 200px;
  /* height: 300px; */
  background-color: ${(props) => props.theme.colors.backgroundCard};
  margin: 30px;
  padding: 15px;
  border: 1px solid black;
  overflow: hidden;
  border-radius: 5px;
`

export const Img = styled.img`
  object-fit: contain;
  width: 90%;
  /* height: 130px; */
  /* margin: 10px; */
`
