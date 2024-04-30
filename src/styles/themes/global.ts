import { Button } from '@/components/Button';
import { createGlobalStyle, ThemeProvider } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: ${props => props.theme.white};  
  }

button {
  font-family: 'Montserrat', sans-serif;
  font-weight: 900;
  font-size: 1rem;
}
`;