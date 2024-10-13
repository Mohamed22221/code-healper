// CartSystem كوظيفة
import React from "react";
export const useCartSystem = () => {
  const [items, setItems] = React.useState<{ [productId: string]: number }>({});
  console.log(items ,"Cart system initialized.");
  const addItem = (productId: string, quantity: number) => {
    setItems((prevItems) => ({
      ...prevItems,
      [productId]: (prevItems[productId] || 0) + quantity,
    }));
    console.log(`Added ${quantity} of product ${productId} to the cart.`);
  };

  const calculateTotal = () => {
    const total = Object.keys(items).reduce((sum, productId) => {
      return sum + items[productId] * 100; // افتراض أن سعر كل منتج هو 100
    }, 0);
    console.log(`Cart total is $${total}`);
    return total;
  };

  return { addItem, calculateTotal, items };
};

// PaymentSystem كوظيفة
export const usePaymentSystem = () => {
  const processPayment = (amount: number) => {
    console.log(`Processing payment of $${amount}`);
    return true; // نفترض أن الدفع يتم بنجاح دائماً في هذا المثال
  };

  return { processPayment };
};

// OrderSystem كوظيفة
export const useOrderSystem = () => {
  const saveOrder = (items: { [productId: string]: number }) => {
    console.log(`Order saved with items: ${JSON.stringify(items)}`);
  };

  return { saveOrder };
};
