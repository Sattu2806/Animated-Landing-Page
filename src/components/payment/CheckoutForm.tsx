"use client";

import { useUser } from "@clerk/nextjs";
import {
	PaymentElement,
	useElements,
	useStripe,
} from "@stripe/react-stripe-js";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { createOrder } from "@/lib/user";

const CheckoutForm = () => {
	const stripe = useStripe();
	const elements = useElements();
	const { user } = useUser();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!elements || !stripe || !user) {
			return;
		}

		const { error: submitError } = await elements.submit();
		if (submitError) {
			console.error(submitError.message);
			return;
		}

		try {
			const name = user.fullName ?? "Unknown";

			const res = await fetch("http://localhost:3000/api/create-intent", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					amount: 100,
					name: name,
					
				}),
			});

			if (!res.ok) {
				throw new Error("Network response was not ok");
			}

			const data = await res.json();
			const { client_secret: clientSecret } = data;

			const { error } = await stripe.confirmPayment({
				clientSecret,
				elements,
				confirmParams: {
					return_url: "http://localhost:3000",
				},
			});

			if (error) {
				console.error(error.message);
			} else {
				console.log("Payment successful");
				await createOrder(user.id, 100);
			}
		} catch (error) {
			console.error("Error during fetch or payment confirmation:", error);
		}
	};

	return (
		<Card className="w-full max-w-96 mx-auto items-center justify-center space-y-4">
			<CardHeader>
				<CardTitle>Checkout page</CardTitle>
			</CardHeader>
			<CardContent>
				<form onSubmit={handleSubmit} className="max-w-lg space-y-4">
					<PaymentElement />
					<button
						type="submit"
						disabled={!stripe || !elements}
						className="w-full bg-yellow-500 p-2 rounded-lg mt-2"
					>
						Pay
					</button>
				</form>
			</CardContent>
		</Card>
	);
};

export default CheckoutForm;
