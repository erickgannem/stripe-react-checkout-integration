import React from 'react';
import { CardElement } from '@stripe/react-stripe-js';
import { StripeCardElementChangeEvent, StripeCardElementOptions } from '@stripe/stripe-js';
import { FormRow } from '../Structure';

interface HandleCardChange {
  (e: StripeCardElementChangeEvent): void;
}
interface Props {
  handleCardChange: HandleCardChange;
}

const CARD_OPTIONS: StripeCardElementOptions = {
  iconStyle: 'solid',
  style: {
    base: {
      iconColor: '#3e2723',
      color: '#fff',
      fontWeight: '500',
      fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
      fontSize: '16px',
      fontSmoothing: 'antialiased',
      ':-webkit-autofill': {
        color: '#fce883',
      },
      '::placeholder': {
        color: '#3e2723',
      },
    },
    invalid: {
      iconColor: '#ffc7ee',
      color: '#ffc7ee',
    },
  },
};

function CardField({ handleCardChange }: Props) {
  return (
    <CardElement
      onChange={handleCardChange}
      options={CARD_OPTIONS}
    />

  );
}

export default CardField;
