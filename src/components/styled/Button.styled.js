import styled from "styled-components";

export const Button = styled.button`
  border-radius: 50px;
  border: none;
  box-shadow: 10px 0px 10px hsl(257, 50%, 49%);
  cursor: pointer;
  font-size: 17px;
  font-weight: 700;
  padding: 15px 60px;
  background-color: ${({ bg }) => bg || "#fff"};
  color: ${({ color }) => color || "#fff"};
  font-family: "Open Sans", sans-serif;

  &:hover {
    opacity: 1.3;
    background: hsl(300, 69%, 71%);
    transform: scale(0.98);
    color: ${({ h_color }) => h_color || "#fff"};
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 70%;
  }
`;
