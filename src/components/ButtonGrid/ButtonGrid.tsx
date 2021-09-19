import styled from 'styled-components';
import Button from '../utils/Button';
import React, {useContext} from 'react';
import Input from '../utils/Input';
import TipContext from '../../store/tip-context';

const ButtonWrapper = styled.div`
  margin-block: 10px 10px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
`;

const ButtonGrid = () => {
  const {
    setActiveButton,
    updateValues,
    activeButton,
    inputValues,
  } = useContext(TipContext);

  const changeTip = (tipAmount: string) => {
    updateValues('selectedTip', tipAmount);
    setActiveButton(tipAmount);
    updateValues('selectedCustomTip', '');
  };

  return <ButtonWrapper>
    <Button
      buttonLabel='5%'
      onClick={() => changeTip('5')}
      active={activeButton === '5'}
    />
    <Button
      buttonLabel='10%'
      onClick={() => changeTip('10')}
      active={activeButton === '10'}
    />
    <Button
      buttonLabel='15%'
      onClick={() => changeTip('15')}
      active={activeButton === '15'}
    />
    <Button
      buttonLabel='25%'
      onClick={() => changeTip('25')}
      active={activeButton === '25'}
    />
    <Button
      buttonLabel='50%'
      onClick={() => changeTip('50')}
      active={activeButton === '50'}
    />
    <Input
      isShort={true}
      hasWholeNumbers={true}
      hasIcon={false}
      placeholder="Custom"
      name="selectedCustomTip"
      value={inputValues.selectedCustomTip}
    />
  </ButtonWrapper>;
};

export default ButtonGrid;
