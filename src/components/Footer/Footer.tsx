import { GitIcon, LinkedinIcon } from '../Icons'
import { FooterBar, Medias, Link, About } from './styles'

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
