import React from 'react';
import styled from 'styled-components';
import {ReactComponent as DollarLogo} from '../../assets/IconDollar.svg';
import {ReactComponent as PersonLogo} from '../../assets/IconPerson.svg';

export interface iconProps {
  isDollar: boolean
}

const StyledIcon = ({isDollar}: iconProps) =>
  <>
    { isDollar ? <DollarLogo/> : <PersonLogo />}
  </>;

const Icon = styled(StyledIcon)`
  width: 1rem;
  height: 1rem;
`;

export default Icon;
