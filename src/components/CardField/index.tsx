import React from 'react';
import { CardElement } from '@stripe/react-stripe-js';
import { StripeCardElementChangeEvent } from '@stripe/stripe-js';

interface HandleCardChange {
  (e: StripeCardElementChangeEvent): void;
}
interface Props {
  handleCardChange: HandleCardChange;
}

function CardField({ handleCardChange }: Props) {
  return (
    <CardElement
      onChange={handleCardChange}
      options={{
        style: {
          base: {
            fontSize: '16px',
            color: '#3e2723',
            '::placeholder': {
              color: '#212121',
            },
          },
          invalid: {
            color: '#9e2146',
          },
        },
      }}
    />
  );
}

export default CardField;
