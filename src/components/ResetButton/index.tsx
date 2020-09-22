import React from 'react';

import { StyledButton } from './styled';

interface ClickHandler {
  (): void;
}
interface Props {
  title: string;
  clickHandler: ClickHandler;
}

function ResetButton(props: Props) {
  const { title, clickHandler } = props;
  return (
    <StyledButton onClick={clickHandler}>{title}</StyledButton>
  );
}

export default ResetButton;
