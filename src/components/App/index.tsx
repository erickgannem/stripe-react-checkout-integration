import React from 'react';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { Container, AppTitle } from './styled';
import CheckoutForm from '../CheckoutForm';

const publishableApiKey = process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY;

const stripePromise = loadStripe(publishableApiKey);

function App() {
  return (
    <Container>
      <AppTitle>React Stripe Checkout</AppTitle>
      <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    </Container>
  );
}

export default App;
