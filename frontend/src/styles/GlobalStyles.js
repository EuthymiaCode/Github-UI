import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;
       
    }

    html {

        font-size: 75%;
    }

    *, button, input {
        border: 0;
        outline: 0;
        font-family: 'Roboto', sans-serif;
    }

    :root {
        --navBar: #24292e;
        --dashboard-perfil: #f9826c;
        --repositorios-primary: #f1e05a; 
        --repositorios-secondary: #2b7489;
        --commits: #216e39;
        --footer: #24292e;  
        --font-color: #FFF;
        --font-primary: #1B1F23;
        --line-color: #e1e4e8;
    }
`
