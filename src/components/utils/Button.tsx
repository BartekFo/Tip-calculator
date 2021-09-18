import React from 'react';
import styled from 'styled-components';
import theme from '../../styles/theme';

const StyledButton = styled.button`
  outline: none;
  color: ${theme.color['white']};
  padding-block: 5px;
  width: 110px;
  background: ${theme.color['darkCyan']};
  border: none;
  border-radius: 5px;
  font-size: 1.3rem;
  transition: background-color 0.1s linear;
  
  &:hover {
    background-color: ${theme.color['primary']};
  }
`;

interface ButtonProps {
  buttonLabel: string,
  secondary?: boolean
}

const Button = ({buttonLabel, secondary}: ButtonProps) =>
  <StyledButton>
    {buttonLabel}
  </StyledButton>;

export default Button;
