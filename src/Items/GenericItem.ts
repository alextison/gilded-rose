import Item from "../Item";

export class GenericItem extends Item {
  constructor(
    type: string,
    sellIn: number | undefined,
    quality: number,
    basePrice: number
  ) {
    super(type, sellIn, quality, basePrice);
  }

  update() {
    this.quality--;
    this.updateIfIsOverFifty(this);
    this.updateIfIsUnderZero(this);
    if (this.sellIn !== 0) {
      this.sellIn--;
    }
  }
}
