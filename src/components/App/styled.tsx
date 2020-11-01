import styled from 'styled-components';

import colorScheme from '../../colorScheme';
const {background, primary, light} = colorScheme;

export const Container = styled.div`
  background-color: ${background};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
  border-radius: 3px;
`;
export const AppTitle = styled.h1`
  color: ${light};
  font-size: 24px;
  margin: 0;
  margin-bottom: 10px;
`;
