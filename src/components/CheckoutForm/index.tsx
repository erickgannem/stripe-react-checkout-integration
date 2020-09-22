import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { PaymentMethod, StripeError } from '@stripe/stripe-js';
import { Form } from './styled';
import Field from '../Field';
import ResetButton from '../ResetButton';

interface BillingDetails {
  email: string;
  phone: string;
  name: string;
}

function CheckoutForm() {
  const [error, setError] = useState<StripeError | null>();
  const [cardComplete, setCardComplete] = useState(null);
  const [processing, setProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | null>();
  const [billingDetails, setBillingDetails] = useState<BillingDetails>({
    email: '',
    phone: '',
    name: '',
  });

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (stripe && elements) {
      if (error) {
        const card = elements.getElement('card');
        if (card) return card.focus();
      }
      if (cardComplete) {
        setProcessing(true);
      }
      const cardElement = elements.getElement(CardElement);

      if (cardElement) {
        const payload = await stripe.createPaymentMethod({
          type: 'card',
          card: cardElement,
          billing_details: billingDetails,
        });

        setProcessing(false);

        if (payload.error) {
          setError(payload.error);
        } else {
          setPaymentMethod(payload.paymentMethod);
        }
      }
    }
  };
  const reset = () => {
    setError(null);
    setProcessing(false);
    setPaymentMethod(null);
    setBillingDetails({
      email: '',
      phone: '',
      name: '',
    });
  };

  return paymentMethod ? (
    <div className="Result">
      <div className="ResultTitle" role="alert">
        Payment successful
      </div>
      <div className="ResultMessage">
        Thanks for trying Stripe Elements. No money was charged, but we
        generated a PaymentMethod:
        {' '}
        {paymentMethod.id}
      </div>
      {/* <ResetButton /> */}
    </div>
  ) : (
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
          onChange={(e) => {
            setBillingDetails({ ...billingDetails, name: e.currentTarget.value });
          }}
        />
        <Field
          label="email"
          id="email"
          type="text"
          placeholder="erickgannem@gmail.com"
          required
          autoComplete="email"
          value={billingDetails.email}
          onChange={(e) => {
            setBillingDetails({ ...billingDetails, email: e.currentTarget.value });
          }}
        />
        <Field
          label="phone"
          id="phone"
          type="text"
          placeholder="Erick Gannem"
          required
          autoComplete="phone"
          value={billingDetails.phone}
          onChange={(e) => {
            setBillingDetails({ ...billingDetails, phone: e.currentTarget.value });
          }}
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
