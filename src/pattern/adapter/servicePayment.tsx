
// paypalService.js
export const paypalPayment = (amount : number) => {
    console.log(`Processing PayPal payment of $${amount}`);
    return { status: "success", method: "PayPal" , amount};
};

// stripeService.js
export const stripePayment = (amount :  number) => {
    console.log(`Processing Stripe payment of $${amount}`);
    return { status: "success", method: "Stripe" , amount};
};