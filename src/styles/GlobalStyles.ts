import {createGlobalStyle} from 'styled-components';
import theme from './theme';

const GlobalStyles = createGlobalStyle`
  * {
  -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    -ms-overflow-style: none;
    font-family: ${theme.fontFamily['spaceMono']};
  }
  
  body {
    text-rendering: optimizeSpeed;
    background: ${theme.color['lightGrayishCyan']};
  }
`;

export default GlobalStyles;
