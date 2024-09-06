import React from 'react';
import PriceStrategy from './strategyCards/priceStrategy';



interface PricingCardBodyProps {
  price: number;
  strategy: PriceStrategy;
}

const PriceCard: React.FC<PricingCardBodyProps> = ({
  price,
  strategy
}) => {
  return (
    <div className='bg-slate-100 w-[300px] flex flex-col justify-between  text-center p-4'>
      <h1 className='text-3xl text-[red]'>{strategy.formatPrice(price)}</h1>
      {strategy.shouldDiscount() && (
        <div className='text-red-500' >
          {strategy.getDiscountMessage(price)}
        </div>
      )}
      <p className='py-2 '>Learn the essential skills for modern fullstack app development.</p>
      <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' >Get started</button>
    </div>
  );
};

export default PriceCard;
