import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  align-items: center;
  color: ${({ color }) => color || "#fff"};

  & > div,
  & > ul {
    flex: 1;
  }
  & > p {
    font-family: "Poppins", sans-serif;
  }

  & > div {
    margin: 0 25px;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;

    & > div {
      margin: 0 10px;
    }

    & > div & > p {
      margin: 0 10px;
    }
  }
`;
