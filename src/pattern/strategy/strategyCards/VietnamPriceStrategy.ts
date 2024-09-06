import PriceStrategy from './priceStrategy';
import { Country, Currency } from './types';

class VietnamPriceStrategy extends PriceStrategy {
  constructor() {
    super();
    this.country = Country.VIETNAM;
    this.currency = Currency.VND;
    this.discountRatio = 0.4;
  }

  formatPrice(price: number) {
    return [price.toLocaleString(), Currency.VND].join(' ');
  }

  getDiscountMessage(price: number): string {
    const formattedDiscountAmount = this.formatPrice(
      this.getDiscountAmount(price)
    );

    return `The price has been discounted by ${formattedDiscountAmount} because you come from Vietnam.`;
  }
}

export default VietnamPriceStrategy;
