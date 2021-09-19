import React from 'react';
import styled, {css} from 'styled-components';
import theme from '../../styles/theme';

const StyledButton = styled.button<{
  secondary?: boolean,
  disabled?: boolean,
  active?: boolean
}>`
  outline: none;
  color: ${({secondary}) => secondary ? 'black' : theme.color['white']};
  padding-block: 5px;
  width: ${({secondary}) => secondary ? '100%' : '110px'};
  ${({active, secondary}) => active && css`
    background-color: ${theme.color['primary']};
    box-shadow: 0 5px 10px rgba(0,0,0,.2);
  ` || !active && secondary && css`
    background-color: ${theme.color['primary']};
  ` || !active && !secondary && css`
    background-color: ${theme.color['darkCyan']};
  `
}
  border: none;
  border-radius: 5px;
  font-size: 1.3rem;
  transition: background-color 0.1s linear;
  cursor: pointer;
  font-weight: ${theme.fontWeight['bold']};
  ${
  ({disabled}) =>
    disabled && css` 
      opacity: 0.2;
      cursor: default;
      pointer-events: none;
    `
}
  
  &:hover {
    ${({active}) => !active && css`
      background-color: ${theme.color['secondPrimary']};
      box-shadow: 0 10px 20px rgba(0,0,0,.2);
    `}
  }
  
  &:focus {
    background-color: ${theme.color['primary']};
    box-shadow: 0 5px 10px rgba(0,0,0,.2);
  }
`;

interface ButtonProps {
  buttonLabel: string
  secondary?: boolean
  disabled?: boolean
  onClick?: () => void
  active?: boolean
}

const Button = (
    {
      buttonLabel,
      secondary,
      disabled,
      onClick,
      active,
    }: ButtonProps) =>
  <StyledButton
    secondary={secondary}
    disabled={disabled}
    onClick={onClick}
    active={active}
  >
    {buttonLabel}
  </StyledButton>;

export default Button;
