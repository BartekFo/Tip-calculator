import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import CalculateSection from '../CalculateSection/CalculateSection';
import SummarySection from '../SummarySection/SummarySection';

const Wrapper = styled.section`
  width: 100%;
  background: ${theme.color['white']};
  border-radius: 25px;
  padding: 30px;
  
  @media(min-width: ${theme.medias.mobile}) {
    width: 90%;
    margin-inline: auto;
    
  }
  
  @media(min-width: ${theme.medias.tablet}) {
    width: 70%;
    min-height: max(min(45vh, 520px), 420px);
    display: flex;
    gap: 50px;
    padding: 40px;
    text-align: left;
    border-radius: 20px;
  }
  
`;

const MainCalculator = () => {
  return (
    <Wrapper>
      <CalculateSection />
      <SummarySection />
    </Wrapper>
  );
};

export default MainCalculator;
