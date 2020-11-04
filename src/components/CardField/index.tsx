import React from 'react';
import { CardElement } from '@stripe/react-stripe-js';
import { StripeCardElementChangeEvent, StripeCardElementOptions } from '@stripe/stripe-js';
import CardFieldWrapper from './styled';

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
      color: colorScheme.onBackgroundLight,
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
    <CardFieldWrapper>
      <CardElement
        onChange={handleCardChange}
        options={CARD_OPTIONS}
      />
    </CardFieldWrapper>

  );
}

export default CardField;
