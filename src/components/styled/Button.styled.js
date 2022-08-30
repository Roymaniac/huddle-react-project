import styled from "styled-components";

export const Button = styled.button`
  border-radius: 50px;
  border: none;
  box-shadow: 0 0 10px hsl(257, 60%, 49%);
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  padding: 15px 60px;
  background-color: ${({ bg }) => bg || "#fff"};
  color: ${({ color }) => color || "#fff"};

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
