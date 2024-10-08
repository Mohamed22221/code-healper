// paymentAdapter.js
import { useState } from "react";
import React from "react";
import { paypalPayment, stripePayment } from "./servicePayment";

type PaymentMethod = "PayPal" | "Stripe";

interface PaymentResponse {
  status: string;
  method: string;
  amount: number;
}

const paymentMethods: Record<
  PaymentMethod,
  (amount:  number) => PaymentResponse
> = {
  PayPal: paypalPayment,
  Stripe: stripePayment,
};

export const PaymentAdapter = (method: PaymentMethod, amount:  number) => {
  const paymentMethod = paymentMethods[method];
  if (!paymentMethod) {
    throw new Error("Unsupported payment method");
  }
  return paymentMethod(amount);
};



//return value
const Adapter = () => {
  const [amount, setAmount] = useState<number>(0);
  const [method, setMethod] = useState<PaymentMethod>("PayPal");
  const [result, setResult] = useState<PaymentResponse | null>(null);

  const handlePayment = () => {
    const response = PaymentAdapter(method, amount);
    setResult(response);
  };

  return (
    <div>
      <h1>Online Payment</h1>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value as any)}
        placeholder="Enter amount"
      />
      <select
        value={method}
        onChange={(e) => setMethod(e.target.value as PaymentMethod)}
      >
        <option value="PayPal">PayPal</option>
        <option value="Stripe">Stripe</option>
      </select>
      <button onClick={handlePayment}>Pay Now</button>

      {result && (
        <div>
          <h2>Payment Result</h2>
          <p>Amount: {result.amount}</p>
          <p>Status: {result.status}</p>
          <p>Method: {result.method}</p>
        </div>
      )}
    </div>
  );
};

export default Adapter;
