import { StripeElementChangeEvent, StripeError } from '@stripe/stripe-js';
import React from 'react';
import StyledSubmitButton from './styled';

// duplication on CheckoutForm
type AppError = StripeError | StripeElementChangeEvent['error'] | null | {}

interface Props {
  processing: boolean;
  error: AppError;
  children: React.PropsWithChildren<string>;
  disabled: boolean
}

function SubmitButton({
  processing, error, children, disabled,
}: Props) {
  return (
    <StyledSubmitButton type="submit" disabled={processing || disabled}>
      {processing ? 'Processing...' : children}
    </StyledSubmitButton>
  );
}

export default SubmitButton;
