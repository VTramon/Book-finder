import styled from 'styled-components'

export const FooterBar = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-evenly;
  max-width: 100%;
  height: 100px;
  background-color: ${(props) => props.theme.colors.backgroundFooter};
  border-top: 1px solid #9e9e9e;
`

export const Link = styled.a`
  margin: 10px;
  :hover {
    cursor: pointer;
  }
`

export const Medias = styled.div`
  margin: 20px;
`

export const About = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
