import styled from 'styled-components';
import theme from '../../styles/theme';
import Button from '../utils/Button';
import React, {useContext} from 'react';
import SummaryNumbers from '../SummaryNumbers/SummaryNumbers';
import TipContext from '../../store/tip-context';

const StyledSection = styled.section`
  background-color: ${theme.color['darkCyan']};
  width: 100%;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  text-align: left;
  padding: 2rem 1.5rem;
  
  @media(min-width: ${theme.medias.tablet}) {
    width: 50%;
  }
`;

const SummarySection = () => {
  const tipCtx = useContext(TipContext);

  const bill = +tipCtx.inputValues.bill;
  const numberOfPeople = +tipCtx.inputValues.numberOfPeople;
  const selectedTip = +tipCtx.inputValues.selectedTip;
  const selectedCustomTip = +tipCtx.inputValues.selectedCustomTip;

  let totalValue: number;
  let tipAmount: number;
  let tipValue;
  let isValid = false;

  if (numberOfPeople !== 0 && selectedTip) {
    tipValue = (bill * selectedTip) / 100;
    totalValue = ((bill + tipValue)/numberOfPeople);
    tipAmount = tipValue / numberOfPeople;
    isValid = true;
  } else if (numberOfPeople !== 0 && !selectedTip) {
    tipValue = (bill * selectedCustomTip) / 100;
    totalValue = ((bill + tipValue)/numberOfPeople);
    tipAmount = tipValue / numberOfPeople;
    isValid = true;
  } else {
    totalValue = bill;
    tipAmount = 0;
  }

  const resetValues = () => {
    tipCtx.resetValues();
    tipCtx.setActiveButton('');
    tipCtx.updateValues('selectedCustomTip', '');
  };

  return <StyledSection>
    <div>
      <SummaryNumbers
        title="Tip Amount"
        smallText="/ person"
        value={tipAmount} />
      <SummaryNumbers
        title="Total"
        smallText="/ person"
        value={totalValue}
      />
    </div>
    <Button
      buttonLabel='RESET'
      secondary
      disabled={!isValid}
      onClick={resetValues}
    />
  </StyledSection>;
};

export default SummarySection;
