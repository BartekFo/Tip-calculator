import styled from 'styled-components';
import Button from '../utils/Button';
import React from 'react';

const ButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

const ButtonGrid = () => <ButtonWrapper>
  <Button buttonLabel='5%' />
  <Button buttonLabel='10%' />
  <Button buttonLabel='15%' />
  <Button buttonLabel='25%' />
  <Button buttonLabel='50%' />
</ButtonWrapper>;

export default ButtonGrid;
