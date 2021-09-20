import React from 'react';
import styled from 'styled-components';
import theme from './styles/theme';
import MainCalculator from './components/MainCalculator/MainCalculator';
import {ReactComponent as MainLogo} from './assets/logo.svg';

const Main = styled.main`
  display: flex;
  margin-block-start: 60px;
  flex-direction: column;
  text-align: center;
  gap: 30px;
  max-width: 100%;
  
  @media(min-width: ${theme.medias.mobile}) {
    margin-inline: auto;
    gap: 100px;
    max-width: ${theme.medias['desktop']};
    margin-block-start: 150px;
  }
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
