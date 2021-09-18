import React from 'react';
import styled from 'styled-components';
import {ReactComponent as DollarLogo} from '../../assets/IconDollar.svg';
import {ReactComponent as PersonLogo} from '../../assets/IconPerson.svg';

export interface iconProps {
  isDollar?: boolean
}

const StyledIcon = ({isDollar}: iconProps) =>
  <>
    { isDollar ? <DollarLogo/> : <PersonLogo />}
  </>;

const Icon = styled(StyledIcon)`
  width: 3rem;
  height: 2rem;
`;

export default Icon;
