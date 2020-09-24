import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        line-height: 1.5;
    }

    html, body, #root {
        height: 100%;
        background-color: var(--bg);
    }

    html {

        font-size: 62.5%;
    }

    *, button, input {
        background: inherit;
        color: inherit;
        border: 0;
        outline: 0;
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;
    }

    :root {
        --navBar: #24292e;
        --dashboard-perfil: #f9826c;
        --repositorios-primary: #f1e05a; 
        --repositorios-secondary: #2b7489;
        --commits: #216e39;
        --icon: ${({ theme }) => theme.icon}; 
        --link-color: #0366D6;
        --font-color: ${({ theme }) => theme.font};
        --font-primary: ${({ theme }) => theme.fontPrimary};
        --bg :  ${({ theme }) => theme.bg};
        --border-color: ${({ theme }) => theme.border} ;
        --bg-secondary: ${({ theme }) => theme.bgSecondary};

       
        --profile-button-color: #FAFBFC;
        --btn-background: #fafbfc;
    }
`
// --font-color:${({ theme }) => theme.colors.font};
//         --bgColor : ${({theme}) => theme.colors.bg};
//         --font-primary: #1B1F23;
