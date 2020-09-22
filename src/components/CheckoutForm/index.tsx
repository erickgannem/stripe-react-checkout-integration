import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { Form } from './styled';
import Field from '../Field';

function CheckoutForm() {
  const [billingDetails, setBillingDetails] = useState({});
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (stripe && elements) {
      const cardElement = elements.getElement(CardElement);
      if (cardElement) {
        const { error, paymentMethod } = await stripe.createPaymentMethod({
          type: 'card',
          card: cardElement,
        });

        if (error) {
          console.log('[error]', error);
        } else {
          console.log('[PaymentMethod]', paymentMethod);
        }
      }
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <fieldset>
        <Field
          label="name"
          id="name"
          type="text"
          placeholder="Erick Gannem"
          required
          autoComplete="name"
          value={billingDetails.name}
          onChange={(e) => { setBillingDetails({ ...billingDetails, name: e.target.value }); }}
        />
      </fieldset>
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
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </Form>
  );
}

export default CheckoutForm;
