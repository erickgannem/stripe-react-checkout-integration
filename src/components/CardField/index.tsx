import React from 'react';
import { CardElement } from '@stripe/react-stripe-js';

function CardField() {
  return (
    <CardElement
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
