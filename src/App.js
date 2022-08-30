import { ThemeProvider } from "styled-components";
import Header from "./components/Header";
import { Container } from "./components/styled/Container.styled";
import GlobalStyle from "./components/styled/Global";

const theme = {
  colors: {
    body: "hsl(257, 40%, 49%)",
    footer: "#003333",
  },
  mobile: "768px",
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyle />
        <Header />
        <Container></Container>
      </>
    </ThemeProvider>
  );
}

export default App;
