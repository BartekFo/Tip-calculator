import React from 'react';
import Input from '../utils/Input';
import styled from 'styled-components';
import H5 from '../utils/H5';

const ErrorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-inline-end: 20px;
`;

const ErrorMessage = styled.h5`
  margin-bottom: 5px;
  color: #bd6449;
`;

interface calculatorInputProps {
  title: string
  isDollar: boolean
  hasWholeNumbers: boolean,
  name: string
  value: number | string,
  isInvalid: boolean
}

const CalculatorInput =
  ({
    title,
    isDollar,
    hasWholeNumbers,
    name,
    value,
    isInvalid,
  }: calculatorInputProps) =>
    <div>
      <ErrorWrapper>
        <H5>{title}</H5>
        {isInvalid && <ErrorMessage>{'Can\'t be zero'}</ErrorMessage>}
      </ErrorWrapper>
      <Input
        isDollar={isDollar}
        isShort={false}
        hasWholeNumbers={hasWholeNumbers}
        hasIcon={true}
        placeholder="0"
        name={name}
        value={value}
      />
    </div>;

export default CalculatorInput;
