import styled from 'styled-components';
import React from 'react';

import Icon from './Icon';
import {iconProps} from './Icon';
import theme from '../../styles/theme';

const InputWrapper = styled.div`
  max-width: 360px;
  display: flex;
  align-items: center;
  background-color: ${theme.color['secondLightGrayishCyan']};
  border-radius: 5px;
  padding: 5px 15px;
  margin-bottom: 30px;
`;

const StyledInput = styled.input`
  text-align: right;
  background-color: inherit;
  border: none;
  font-size: 24px;
  width: 100%;
  height: 80%;
  outline: none;
  color: ${theme.color['secondDarkGrayishCyan']}
`;

const Input = ({isDollar}: iconProps) => <InputWrapper>
  <Icon isDollar={isDollar} />
  <StyledInput type="number" min={1}/>
</InputWrapper>;

export default Input;
