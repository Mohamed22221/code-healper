import { Country, Currency } from './types';

abstract class PriceStrategy {
  protected country: Country = Country.AMERICA;
  protected currency: Currency = Currency.USD;
  protected discountRatio = 0;

  getCountry(): Country {
    return this.country;
  }

  formatPrice(price: number): string {
    return [this.currency, price.toLocaleString()].join('');
  }

  getDiscountAmount(price: number): number {
    return price * this.discountRatio;
  }

  getFinalPrice(price: number): number {
    return price - this.getDiscountAmount(price);
  }

  shouldDiscount(): boolean {
    return this.discountRatio > 0;
  }

  getDiscountMessage(price: number): string {
    const formattedDiscountAmount = this.formatPrice(
      this.getDiscountAmount(price)
    );

    return `It's lucky that you come from ${this.country}, because we're running a program that discounts the price by ${formattedDiscountAmount}.`;
  }
}

export default PriceStrategy;