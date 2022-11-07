import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle `
    @import url('https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;700&display=swap');

    *{
        box-sizing: border-box;

    }

    body{
        font-family: 'Urbanist', sans-serif;
        margin: 0;
        padding: 0;
    }
    img{
        max-width: 100%;
    }
    h1,h2,h3,h4,h5,h6{
        margin: 0;
    }
    p{
        margin: 0;
    }
    a{
        text-decoration: none;
    }
`;