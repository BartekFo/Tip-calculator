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
  const tipCtx = useContext(TipContext);

  return <ButtonWrapper>
    <Button buttonLabel='5%' />
    <Button buttonLabel='10%' />
    <Button buttonLabel='15%' />
    <Button buttonLabel='25%' />
    <Button buttonLabel='50%' />
    <Input
      isShort={true}
      hasWholeNumbers={true}
      hasIcon={false}
      placeholder="Custom"
      name="selectedCustomTip"
      value={tipCtx.inputValues.selectedCustomTip}
    />
  </ButtonWrapper>;
};

export default ButtonGrid;
