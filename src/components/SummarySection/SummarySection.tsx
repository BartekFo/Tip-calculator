import styled from 'styled-components';
import theme from '../../styles/theme';
import Button from '../utils/Button';
import React from 'react';
import SummaryNumbers from '../SummaryNumbers/SummaryNumbers';

const StyledSection = styled.section`
  width: 50%;
  background-color: ${theme.color['darkCyan']};
  border-radius: 10px;
  padding: 0 35px 25px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  
`;

const SummarySection = () => <StyledSection>
  <div>
    <SummaryNumbers title="Tip Amount" smallText="/ person" value={0.00} />
    <SummaryNumbers title="Total" smallText="/ person" value={0.00} />
  </div>
  <Button buttonLabel='RESET' secondary disabled />
</StyledSection>;

export default SummarySection;
