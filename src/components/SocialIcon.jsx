import { Container } from "./styled/Container.styled";
import { StyledSocial } from "./styled/Header.styled";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

function SocialIcon() {
  return (
    <Container>
      <StyledSocial>
        <ul>
          <li>
            <a href=" ">
              <FaFacebookF />
            </a>
          </li>
          <li>
            <a href=" ">
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href=" ">
              <FaInstagram />
            </a>
          </li>
        </ul>
      </StyledSocial>
    </Container>
  );
}

export default SocialIcon;
