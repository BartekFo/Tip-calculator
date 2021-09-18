import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider} from 'styled-components';
import App from './App';
import theme from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';
import {TipContextProvider} from './store/tip-context';

ReactDOM.render(
    <ThemeProvider theme={theme}>
      <TipContextProvider>
        <App/>
      </TipContextProvider>
      <GlobalStyles />
    </ThemeProvider>,
    document.getElementById('root'),
);
