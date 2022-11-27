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

  Update() {
    this.quality--;
    this.UpdateIfIsOverFifty(this);
    this.UpdateIfIsUnderZero(this);
    if (this.sellIn !== 0) {
      this.sellIn--;
    }
  }
}
