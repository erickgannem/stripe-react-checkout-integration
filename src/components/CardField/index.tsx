import React from 'react';
import { CardElement } from '@stripe/react-stripe-js';
import { StripeCardElementChangeEvent, StripeCardElementOptions } from '@stripe/stripe-js';

import colorScheme from '../../colorScheme';

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
      padding: 5,
      iconColor: colorScheme.onBackgroundLight,
      fontWeight: '500',
      fontFamily: 'Roboto, Open Sans, Segoe UI, sans-serif',
      fontSize: '16px',
      fontSmoothing: 'antialiased',
      ':-webkit-autofill': {
        color: colorScheme.onBackgroundLight,
      },
      '::placeholder': {
        color: colorScheme.onBackgroundLight,
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
