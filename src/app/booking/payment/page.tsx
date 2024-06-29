"use client"

import React, { useContext } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from '@/components/payment/CheckoutForm';

const Payment = () => {
    

const stripePromise = loadStripe(
	process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as any
);

const options: any = {
	mode: "payment",
	amount: 100,
	currency: "usd",
	paymentMethodOrder: ["apple_pay", "google_pay", "card", "klarna"],
};

  return (
		<Elements stripe={stripePromise} options={options}  >
			<CheckoutForm />
		</Elements>
	);
}

export default Payment