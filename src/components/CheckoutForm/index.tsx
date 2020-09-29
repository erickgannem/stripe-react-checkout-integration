import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import {
  PaymentMethod, StripeError, StripeCardElementChangeEvent, StripeElementChangeEvent,
} from '@stripe/stripe-js';
import { Form } from './styled';
import Field from '../Field';
import ResetButton from '../ResetButton';
import CardField from '../CardField';
import { FormGroup } from '../Structure';
import SubmitButton from '../SubmitButton';

interface BillingDetails {
  email: string;
  phone: string;
  name: string;
}
// duplication on SubmitButton
type Error = StripeError | StripeElementChangeEvent['error'] | null

function CheckoutForm() {
  const [error, setError] = useState<Error>(null);
  const [cardComplete, setCardComplete] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod | null>();
  const [billingDetails, setBillingDetails] = useState<BillingDetails>({
    email: '',
    phone: '',
    name: '',
  });

  const stripe = useStripe();
  const elements = useElements();

  interface BodyObject {
    amount: number;
    paymentData: PaymentMethod
  }
  const sendPaymentToApi = async (endpoint: string, body: BodyObject) => {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: JSON.stringify(body),
      });
      if (response.status === 200) {
        return response;
      }
      throw new Error('Error sending information to server');
    } catch (err) {
      return setError(err);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (stripe && elements) {
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

        if (payload.paymentMethod) {
          setPaymentMethod(payload.paymentMethod);
          sendPaymentToApi('https://localhost:3030/payment_intent', { amount: 3000, paymentData: payload.paymentMethod });
        } else {
          setError(error);
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
  const handleCardChange = (e: StripeCardElementChangeEvent) => {
    setError(e.error);
    setCardComplete(e.complete);
  };
  return paymentMethod ? (
    <div>
      <div role="alert">
        Payment successful
      </div>
      <div className="ResultMessage">
        Thanks for trying Stripe Elements. No money was charged, but we
        generated a PaymentMethod:
        {' '}
        {paymentMethod.id}
      </div>
      <ResetButton title="Reset" clickHandler={reset} />
    </div>
  ) : (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
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
      </FormGroup>
      <CardField handleCardChange={handleCardChange} />
      <SubmitButton processing={processing} error={error} disabled={!stripe}>
        Pay
      </SubmitButton>
    </Form>
  );
}

export default CheckoutForm;
