import Item from "../Item";

export class ConjuredItem extends Item {
  constructor(
    type: string,
    sellIn: number | undefined,
    quality: number,
    basePrice: number
  ) {
    super(type, sellIn, quality, basePrice);
  }

  update() {
    this.quality = this.quality - 2;
    this.updateIfIsOverFifty(this);
    this.updateIfIsUnderZero(this);
    if (this.sellIn !== 0) {
      this.sellIn--;
    }
  }
}
