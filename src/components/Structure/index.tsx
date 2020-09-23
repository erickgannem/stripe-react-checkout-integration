import styled from 'styled-components';

export const FormGroup = styled.fieldset`
  margin: 0 15px 20px;
  padding: 0;
  border-style: none;
  background-color: #7795f8;
  will-change: opacity, transform;
  box-shadow: 0 6px 9px rgba(50, 50, 93, 0.06), 0 2px 5px rgba(0, 0, 0, 0.08),
    inset 0 1px 0 #829fff;
  border-radius: 4px;
`;

export const FormRow = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  margin-left: 15px;
  border-top: 1px solid #819efc;
`;

export const FormRowLabel = styled.label`
  width: 15%;
  min-width: 70px;
  padding: 11px 0;
  color: #c4f0ff;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const FormRowInput = styled.input`
  font-size: 16px;
  width: 100%;
  padding: 11px 15px 11px 0;
  color: #fff;
  background-color: transparent;
  animation: 1ms void-animation-out;
`;

export const ErrorMessage = styled.div`
  color: #fff;
  position: absolute;
  display: flex;
  justify-content: center;
  padding: 0 15px;
  font-size: 13px;
  margin-top: 0px;
  width: 100%;
  transform: translateY(-15px);
  opacity: 0;
  animation: fade 150ms ease-out;
  animation-delay: 50ms;
  animation-fill-mode: forwards;
  will-change: opacity, transform;
`;

export const Result = styled.div`
  margin-top: 50px;
  text-align: center;
  animation: fade 200ms ease-out;

`;
export const ResultTitle = styled.div`
  color: #fff;
  font-weight: 500;
  margin-bottom: 8px;
  font-size: 17px;
  text-align: center;
`;

export const ResultMessage = styled.div`
  color: #9cdbff;
  font-size: 14px;
  font-weight: 400;
  margin-bottom: 25px;
  line-height: 1.6em;
  text-align: center;
`;
export const ResetButton = styled.button`
  border: 0;
  cursor: pointer;
  background: transparent;
`;
