import React from 'react';
import styled from 'styled-components';
import H5 from '../utils/H5';
import theme from '../../styles/theme';

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
`;

const Header = styled(H5)`
  color: white;
  margin: 0;
`;

const SmallText = styled.p`
  color: ${theme.color['secondDarkGrayishCyan']};
`;

const NumberWrapper = styled.div`
  color: ${theme.color['primary']};
  font-size: 2.5rem;
  font-weight: ${theme.fontWeight['bold']};
`;

interface summaryNumbersProps {
  title: string
  smallText: string
  value: number
}

const SummaryNumbers =
  ({title, smallText, value}: summaryNumbersProps) =>
    <Wrapper>
      <div>
        <Header>{title}</Header>
        <SmallText>{smallText}</SmallText>
      </div>
      <NumberWrapper>
  ${value.toFixed(2)}
      </NumberWrapper>
    </Wrapper>;

export default SummaryNumbers;
