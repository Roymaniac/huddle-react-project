import styled from "styled-components";
import bg_desktop from "../../bg-desktop.svg";
import bg_mobile from "../../bg-mobile.svg";

export const StyledHeader = styled.header`
  @import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");

  background-image: url(${bg_desktop});
  background-repeat: no-repeat;
  background-position: -55px center;
  width: 100%;
  height: 100vh;
  background-size: contain;
  padding: 40px 0;
  font-family: "Poppins" sans-serif;
  font-weight: 400;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    background-image: url(${bg_mobile});
    background-repeat: no-repeat;
    background-position: center center;
    width: 100%;
    height: 95vh;
    background-size: cover;
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
  color: "#fff";

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    margin-left: 10px;
  }
`;

export const Logo = styled.img`
  margin-left: 13px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: flex;
    margin-bottom: 40px;
    width: 40%;
  }
`;

export const Image = styled.img`
  width: 645px;
  margin-right: 60px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 30px 0 40px;
    width: 585px;
  }
`;

export const StyledSocial = styled.div`
  display: flex;
  justify-content: flex-end;
  color: "#fff";

  ul {
    list-style-type: none;
    display: flex;
    margin: 0 40px;
  }
  ul li {
    margin-bottom: 20px;
    padding: 0 10px;
  }

  a {
    border: 1px solid;
    padding: 10px 14px;
    border-radius: 40px 40px;
    color: ${({ color }) => color || "#fff"};
    align-items: center;
    justify-content: center;
    cursor: pointer;
    &:hover {
      color: hsl(300, 69%, 71%);
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    justify-content: center;
    text-align: center;

    ul {
      margin: 70px 0px 0px;
      padding: 0;
    }
  }
`;
