import styled from 'styled-components'
import { GitIcon, LinkedinIcon } from './Icons'

const FooterBar = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-evenly;
  width: 100vw;
  height: 100px;
  background-color: ${(props) => props.theme.colors.backgroundFooter};
  border-top: 1px solid #9e9e9e;
`

const Link = styled.a`
  margin: 10px;
  :hover {
    cursor: pointer;
  }
`

const Medias = styled.div`
  margin: 20px;
`

const About = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Footer = () => {
  return (
    <FooterBar>
      <Medias>
        <Link
          href="https://www.linkedin.com/in/vitor-ramon-543256163/"
          target="_blank"
        >
          <LinkedinIcon height={40} width={40} />
        </Link>
        <Link href="https://github.com/VTramon" target="_blank">
          <GitIcon height={40} width={40} />
        </Link>
      </Medias>
      <About>
        <h4>About</h4>
        <h6>this is a book finder that uses the google's API</h6>
      </About>
    </FooterBar>
  )
}

export default Footer
