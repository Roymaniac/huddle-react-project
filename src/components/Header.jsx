import { Button } from "./styled/Button.styled";
import { Container } from "./styled/Container.styled";
import { Image, Logo, Nav, StyledHeader } from "./styled/Header.styled";
import logo from "../logo.svg";
import svg from "../illustration-mockups.svg";
import { Flex } from "./styled/Flex.styled";
import SocialIcon from "./SocialIcon";

export default function Header() {
  return (
    <StyledHeader bg="blue">
      <Container>
        <Nav>
          <Logo src={logo} alt="" />
        </Nav>
        <Flex>
          <div>
            <Image src={svg} />
          </div>
          <div>
            <h1>Build The Community Your Fans Will Love</h1>
            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>
            <Button color="hsl(257, 40%, 49%)">Register</Button>
          </div>
        </Flex>
      </Container>
      <SocialIcon/>
    </StyledHeader>
  );
}
