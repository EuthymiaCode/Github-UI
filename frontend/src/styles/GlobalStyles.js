import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
       background-color: var(--bg)
    }

    html {

        font-size: 75%;
    }

    *, button, input {
        background: inherit;
        color: inherit;
        border: 0;
        outline: 0;
        font-family: Roboto, sans-serif;
    }

    :root {
        --navBar: #24292e;
        --dashboard-perfil: #f9826c;
        --repositorios-primary: #f1e05a; 
        --repositorios-secondary: #2b7489;
        --commits: #216e39;
        
        --font-color: ${({ theme }) => theme.font};
        --font-primary: ${({ theme }) => theme.fontPrimary};
        --bg :  ${({ theme }) => theme.bg};

        --line-color: #e1e4e8;
        --profile-button-color: #FAFBFC;
        --btn-background: #fafbfc;
    }
`
// --font-color:${({ theme }) => theme.colors.font};
//         --bgColor : ${({theme}) => theme.colors.bg};
//         --font-primary: #1B1F23;
