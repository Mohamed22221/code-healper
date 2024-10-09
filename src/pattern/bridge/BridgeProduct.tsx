import React from "react";


export interface Product {
  id: number;
  name: string;
  price: number;
}

export interface ProductDisplayProps {
  products: Product[];
  render: (product: Product) => JSX.Element;
}

export const ProductItem = ({ id, name, price }: Product) => {
  return (
    <div className="border rounded-lg p-4 shadow-md bg-white">
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-600">Price: ${price}</p>
    </div>
  );
};

export const ProductDisplay: React.FC<ProductDisplayProps> = ({
  products,
  render,
}) => {
  return <div className="grid gap-6">{products.map(render)}</div>;
};
