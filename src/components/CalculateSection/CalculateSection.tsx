import styled from 'styled-components';
import CalculatorInput from '../CalculatorInput/CalculatorInput';
import H5 from '../utils/H5';
import ButtonGrid from '../ButtonGrid/ButtonGrid';
import React, {useContext} from 'react';
import TipContext from '../../store/tip-context';
import theme from '../../styles/theme';

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 450px;
  text-align: left;
  margin-bottom: 30px;

  @media(min-width: ${theme.medias.tablet}) {
    width: 50%;
    margin-bottom: 0;
    min-height: 0;
  }
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
