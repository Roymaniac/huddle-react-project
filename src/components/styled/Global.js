import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    
    @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap");
    @import url("https://fonts.googleapis.com/css2?family=Open+Sans&display=swap");


    *{
        box-sizing: border-box;
        
    }

    body{
        background: ${({ theme }) => theme.colors.body};
        color: hsl(192, 100%, 9%);
        font-family: "Open Sans", sans-serif;
        font-size: 1.15em;
        font-weight: 600;
        margin: 0;
    }

    p{
        opacity: 0.6;
        line-height: 1.5;
    }

    img{
       max-width: 100%;
    }
`;

export default GlobalStyle;
