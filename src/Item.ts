export default abstract class Item {
  constructor(
    public type: string,
    protected sellIn: number | undefined,
    protected quality: number,
    protected basePrice: number
  ) {}

  protected Update() {}

  protected UpdateIfIsUnderZero(item: Item) {
    if (item.quality < 0) {
      item.quality = 0;
    }
  }

  protected UpdateIfIsOverFifty(item: Item) {
    if (item.quality > 50) {
      item.quality = 50;
    }
  }

  GetValue(basePrice: number, quality: number) {
    let value = basePrice + quality * 10;
    return value;
  }

  GetQuality() {
    return this.quality;
  }
}
