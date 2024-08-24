import React, { useState } from "react";

interface Handler {
  setNextHandler(handler: Handler): void;
  handle(request: number): number;
}

export class DiscountHandler implements Handler {
  nextHandler: Handler | undefined;

  setNextHandler(handler: Handler) {
    this.nextHandler = handler;
  }

  handle(price: number): number {
    // منطق حساب الخصم
    const discountedPrice = price - 1; // مثال لخصم 10%
    return this.nextHandler
      ? this.nextHandler.handle(discountedPrice)
      : discountedPrice;
  }
}

export class TaxHandler implements Handler {
  nextHandler: Handler | undefined;

  setNextHandler(handler: Handler) {
    this.nextHandler = handler;
  }

  handle(price: number): number {
    // منطق حساب الخصم
    const taxHandle = price - 2; // مثال لخصم 10%
    return this.nextHandler ? this.nextHandler.handle(taxHandle) : taxHandle;
  }
}

export class ShippingHandler implements Handler {
  nextHandler: Handler | undefined;

  setNextHandler(handler: Handler) {
    this.nextHandler = handler;
  }

  handle(price: number): number {
    // منطق حساب الخصم
    const shippingHandle = price - 3; // مثال لخصم 10%
    return this.nextHandler
      ? this.nextHandler.handle(shippingHandle)
      : shippingHandle;
  }
}

export default function ChainClass() {
  const [price, setPrice] = useState(100);

  const discountHandler = new DiscountHandler();
  const taxHandler = new TaxHandler();
  const shippingHandler = new ShippingHandler();

  discountHandler.setNextHandler(taxHandler);
  taxHandler.setNextHandler(shippingHandler);

  const finalPrice = discountHandler.handle(price);

  return (
    <div>
      <p>السعر الأصلي: {price}</p>
      <p>السعر النهائي: {finalPrice}</p>
    </div>
  );
}
