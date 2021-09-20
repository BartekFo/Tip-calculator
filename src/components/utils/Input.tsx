import styled, {css} from 'styled-components';
import React, {useContext} from 'react';

import Icon from './Icon';
import theme from '../../styles/theme';
import TipContext from '../../store/tip-context';

const InputWrapper = styled.div`
  position: relative;
  & svg {
    position: absolute;
    z-index: 1;
    top: 15px;
    left: 20px;
  }
`;

const StyledInput = styled.input<{isShort: boolean}>`
  width: ${({isShort}) => isShort ? '150px' : '100%'};;
  text-align: right;
  border-radius: 5px;
  background-color: ${theme.color['secondLightGrayishCyan']};
  font-size: 24px;
  outline: none;
  color: ${theme.color['darkCyan']};
  font-weight: ${theme.fontWeight['bold']};
  position: relative;
  padding: ${({isShort}) => isShort ? '5px 10px' : '5px 15px'};
  border: 2px solid transparent;

  @media(min-width: ${theme.medias.tablet}) {
    width: ${({isShort}) => isShort ? '130px' : 'calc(100% - 15px)'};
  }
  
  
  &::placeholder {
    color: ${theme.color['secondDarkGrayishCyan']};
    ${({isShort}) => isShort && css`
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    `};
  }
  
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    -moz-appearance: none;
  }

  &:focus {
    border: 2px solid ${theme.color['primary']};
  }
`;

interface inputProps {
  isDollar?: boolean
  hasWholeNumbers: boolean
  isShort: boolean
  hasIcon: boolean
  placeholder?: string
  name: string
  value: number | string
}

const Input = ({
  isDollar,
  isShort,
  hasWholeNumbers,
  hasIcon,
  placeholder,
  name,
  value,
}: inputProps) => {
  const {
    updateValues,
    setIsBillInvalidToTrue,
    setIsBillInvalidToFalse,
    setIsNumberOfPeopleInvalidToTrue,
    setIsNumberOfPeopleInvalidToFalse,
    setActiveButton,
  } = useContext(TipContext);

  const onChangeHandler = (event: {
    target: {
      value?: string | undefined; name?: any;
    };
  }) => {
    const value: string | undefined = event.target.value;
    const {name} = event.target;

    updateValues(name, value);
    setActiveButton('');

    if (value !== undefined &&
      +value === 0 &&
      name === 'bill' &&
      value !== ''
    ) {
      setIsBillInvalidToTrue();
    } else if (
      value !== undefined &&
      +value !== 0 &&
      name === 'bill' ||
      value === '' &&
      name === 'bill'
    ) {
      setIsBillInvalidToFalse();
    } else if (
      value !== undefined &&
      +value === 0 &&
      name === 'numberOfPeople' &&
      value !== ''
    ) {
      setIsNumberOfPeopleInvalidToTrue();
    } else if (
      value !== undefined &&
      +value !== 0 &&
      name === 'numberOfPeople' ||
      value === '' &&
      name === 'numberOfPeople'
    ) {
      setIsNumberOfPeopleInvalidToFalse();
    }

    if (name === 'selectedCustomTip') {
      updateValues('selectedTip', '');
    }
  };


  return <InputWrapper>
    {hasIcon && <Icon isDollar={isDollar}/>}
    <StyledInput
      isShort={isShort}
      type="number"
      step={hasWholeNumbers ? 1 : 0.01}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChangeHandler}
    />
  </InputWrapper>;
};

export default Input;
