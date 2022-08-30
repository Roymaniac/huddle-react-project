import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  align-items: center;
  color: ${({ color }) => color || "#fff"};

  & > div,
  & > ul {
    flex: 1;
  }

  & > div {
    margin: 0 20px;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;

    & > div & > p {
      margin: 0 10px;
    }
  }
`;
