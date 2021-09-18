import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';
import Button from '../utils/Button';
import Input from '../utils/Input';
import ButtonGrid from '../ButtonGrid/ButtonGrid';

const Wrapper = styled.section`
  width: 60%;
  background: ${theme.color['white']};
  margin-inline: auto;
  display: flex;
  gap: 50px;
  padding: 40px;
  text-align: left;
  border-radius: 20px;
`;

const CalculateSection = styled.section`
  width: 50%;
`;

const SummarySection = styled.section`
  width: 50%;
  background-color: ${theme.color['darkCyan']};
`;

const H5 = styled.h5`
  color: ${theme.color['darkGrayishCyan']};
  margin-bottom: 5px;
`;

const MainCalculator = () => {
  return (
    <Wrapper>
      <CalculateSection>
        <H5>Bill</H5>
        <Input isDollar={true} />
        <H5>Select Tip %</H5>
        <ButtonGrid />
        <input type="text"/>
        <H5>Number of People</H5>
        <Input isDollar={false}/>
      </CalculateSection>
      <SummarySection>
        {/* TODO: Create component for this*/}
        <div>
          <div>
            <h5>Tip Amont</h5>
            <p>/ person</p>
          </div>
          <div>
            $4.27
          </div>
        </div>
        <div>
          <div>
            <h5>Tip Amont</h5>
            <p>/ person</p>
          </div>
          <div>
            $4.27
          </div>
        </div>
        <Button buttonLabel='RESET' secondary />
      </SummarySection>
    </Wrapper>
  );
};

export default MainCalculator;
