import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-block: 0 2rem;
`;

const Header = styled.h4`
  color: white;
  margin: 0;
`;

const SmallText = styled.p`
  color: ${theme.color['secondDarkGrayishCyan']};
`;

const NumberWrapper = styled.div`
  color: ${theme.color['primary']};
  font-size: 2rem;
  font-weight: ${theme.fontWeight['bold']};
  
  @media (min-width: ${theme.medias.tablet}) {
    font-size: 2.5rem;
  }
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
