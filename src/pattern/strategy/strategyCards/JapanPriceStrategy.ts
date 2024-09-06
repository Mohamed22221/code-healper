import PriceStrategy from './priceStrategy';
import { Country, Currency } from './types';


class JapanPriceStrategy extends PriceStrategy {
  constructor() {
    super();
    this.country = Country.JAPAN;
    this.currency = Currency.YEN;
    this.discountRatio = 0.2;
  }

  getDiscountMessage(price: number): string {
    const formattedDiscountAmount = this.formatPrice(
      this.getDiscountAmount(price)
    );

    return `We have discounted the price by ${formattedDiscountAmount} thanks to the support from Japan's government.`;
  }
}

export default JapanPriceStrategy;
