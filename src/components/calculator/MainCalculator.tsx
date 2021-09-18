import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import CalculateSection from '../CalculateSection/CalculateSection';
import SummarySection from '../SummarySection/SummarySection';

const Wrapper = styled.section`
  width: 60%;
  min-height: max(min(45vh, 520px), 420px);
  background: ${theme.color['white']};
  margin-inline: auto;
  display: flex;
  gap: 50px;
  padding: 40px;
  text-align: left;
  border-radius: 20px;
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
