import Item from "../Item";

export class AgingItem extends Item {
  constructor(
    type: string,
    sellIn: number,
    quality: number,
    basePrice: number
  ) {
    super(type, sellIn, quality, basePrice);
  }

  Update() {
    if (this.sellIn >= 0) {
      this.quality += 3;
    } else if (this.sellIn > 5) {
      this.quality += 2;
    } else if (this.sellIn > 10) {
      this.quality += 1;
    }
    this.UpdateIfIsOverFifty(this);
    this.UpdateIfIsUnderZero(this);
    if (this.sellIn !== 0) {
      this.sellIn--;
    }
  }
}
