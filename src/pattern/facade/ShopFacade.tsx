import { useCartSystem, useOrderSystem, usePaymentSystem } from "./SubsystemsShop";

const useShopFacade = () => {
    const cartSystem = useCartSystem();
    const paymentSystem = usePaymentSystem();
    const orderSystem = useOrderSystem();
  
    const addItemToCart = (productId: string, quantity: number) => {
      cartSystem.addItem(productId, quantity);
    };
  
    const checkout = () => {
      const total = cartSystem.calculateTotal();
      const paymentSuccessful = paymentSystem.processPayment(total);
  
      if (paymentSuccessful) {
        orderSystem.saveOrder(cartSystem.items);
        console.log("Checkout completed successfully!");
      } else {
        console.log("Payment failed. Please try again.");
      }
    };
  
    return { addItemToCart, checkout ,  total : cartSystem.calculateTotal()};
  };

  export default useShopFacade