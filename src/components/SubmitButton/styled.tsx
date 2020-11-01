import styled from 'styled-components';

import colorScheme from '../../colorScheme'

const StyledSubmitButton = styled.button`
  display: block;
  font-size: 16px;
  width: calc(100% - 30px);
  height: 40px;
  margin: 40px 15px 0;
  background-color: ${colorScheme.primary};
  border-radius: 4px;
  border: none;
  color: ${colorScheme.dark};
  font-weight: 600;
  cursor: pointer;
  transition: all 100ms ease-in-out;
  will-change: transform, background-color, box-shadow;
`;

export default StyledSubmitButton;
