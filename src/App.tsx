import React from 'react';
import styled from 'styled-components';
import theme from './styles/theme';
import MainCalculator from './components/calculator/MainCalculator';
import {ReactComponent as MainLogo} from './assets/logo.svg';

const Main = styled.main`
  margin-inline: auto;
  max-width: ${theme.medias['desktop']};
  text-align: center;
  margin-block-start: 150px;
  display: flex;
  flex-direction: column;
  gap: 100px
`;


const App = () => {
  return (
    <Main>
      <div>
        <MainLogo />
      </div>
      <MainCalculator />
    </Main>
  );
};

export default App;
