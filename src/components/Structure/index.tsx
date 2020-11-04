import styled from 'styled-components';

import colorScheme from '../../colorScheme';

export const FormGroup = styled.fieldset`
  background: ${colorScheme.backgroundLight};
  border: none;
  color: ${colorScheme.onBackgroundLight};
  margin: 0;
  margin-bottom: 20px;
`;

export const FormRow = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

export const FormRowLabel = styled.label`
  margin-bottom: 10px;
`;

export const FormRowInput = styled.input`
  background: ${colorScheme.background};
  border: none;
  padding: 15px;
  border-radius: 3px;
`;

export const ErrorMessage = styled.div`

`;

export const Result = styled.div`


`;
export const ResultTitle = styled.div`

`;

export const ResultMessage = styled.div`

`;
export const ResetButton = styled.button`

`;
