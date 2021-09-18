import styled from 'styled-components';
import CalculatorInput from '../CalculatorInput/CalculatorInput';
import H5 from '../utils/H5';
import ButtonGrid from '../ButtonGrid/ButtonGrid';
import React, {useContext} from 'react';
import TipContext from '../../store/tip-context';

const StyledSection = styled.section`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CalculateSection = () => {
  const tipCtx = useContext(TipContext);

  return <StyledSection>
    <CalculatorInput
      title="Bill"
      isDollar={true}
      hasWholeNumbers={false}
      name="bill"
      value={tipCtx.inputValues.bill}
      isInvalid={tipCtx.isBillInvalid}
    />
    <div>
      <H5>Select Tip %</H5>
      <ButtonGrid />
    </div>
    <CalculatorInput
      title="Number of People"
      isDollar={false}
      hasWholeNumbers={true}
      name="numberOfPeople"
      value={tipCtx.inputValues.numberOfPeople}
      isInvalid={tipCtx.isNumberOfPeopleInvalid}
    />
  </StyledSection>;
};

export default CalculateSection;
