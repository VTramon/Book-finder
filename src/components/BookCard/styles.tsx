import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 300px;
  height: 300px;
  background-color: ${(props) => props.theme.colors.backgroundCard};
  margin: 30px;
  padding: 15px;
  border: 1px solid black;
  overflow: hidden;
  border-radius: 5px;
`

export const Img = styled.img`
  object-fit: contain;
  width: 190px;
  height: 130px;
  margin: 10px;
`

export const Title = styled.div`
  height: auto;
  width: auto;
  object-fit: cover;
  margin-right: 15px;
  margin: 10px;
  align-items: center;
  justify-content: center;
`

export const Authors = styled.div`
  height: auto;
  width: auto;
  object-fit: cover;
  margin-right: 15px;
  margin: 10px;
  align-items: center;
  justify-content: center;
`

export const Text = styled.p`
  height: inherit;
  width: inherit;
  text-align: center;
  word-wrap: break-word;
  overflow-x: unset;
`
