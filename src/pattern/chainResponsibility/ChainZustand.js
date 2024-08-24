import React from "react";

import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
const usePriceStore = create(
  immer((set, get) => ({
    handlers: [],
    price: 0,
    calculateFinalPrice: (initialPrice) => {
      set({ price: initialPrice });
      get().handlers.forEach((handler) => handler());
    },
    addHandler: (handler) =>
      set((state) => ({ handlers: [...state.handlers, handler] })),
  }))
);

const ChainZustand = () => {
  const applyDiscount = () => {
    usePriceStore.getState().price -= 10; // خصم 20%
  };

  const applyTax = () => {
    usePriceStore.getState().price -= 2.5; // خصم 20%
  };
  const applyShipping = () => {
    usePriceStore.getState().price += 5; // تكلفة شحن ثابتة 5 دولارات
  };
  // حساب السعر النهائي لمنتج بسعر أولي 100 دولار
  usePriceStore.getState().calculateFinalPrice(100);
  usePriceStore.getState().addHandler(applyDiscount);
  usePriceStore.getState().addHandler(applyTax);
  usePriceStore.getState().addHandler(applyShipping);

  console.log("Final price:", usePriceStore.getState().price);
  return <div>{usePriceStore.getState().price}</div>;
};

export default ChainZustand;
