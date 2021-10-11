import styled from 'styled-components';
import { GitIcon, LinkedinIcon } from './Icons';

const FooterBar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-evenly;
  width: 100vw;
  height: 100px;
  background-color: ${(props) => props.theme.colors.backgroundFooter};
`;

const Link = styled.a`
  margin: 10px;
  :hover {
    cursor: pointer;
  }
`;

const Medias = styled.div`
  margin: 20px;
`;

const About = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Footer = () => {
  return (
    <FooterBar>
      <Medias>
        <Link>
          <LinkedinIcon height={40} width={40} />
        </Link>
        <Link>
          <GitIcon height={40} width={40} />
        </Link>
      </Medias>
      <About>
        <h4>About</h4>
        <h6>
          this is a book finder that uses the google's API to search books in
          the store
        </h6>
      </About>
    </FooterBar>
  );
};

export default Footer;
