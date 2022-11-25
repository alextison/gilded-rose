export default abstract class Item {
  constructor(
    type: string,
    protected sellIn: number | undefined,
    protected quality: number,
    protected basePrice: number
  ) {}

  protected update() {}

  protected updateIfIsUnderZero(item: Item) {
    if (item.quality < 0) {
      item.quality = 0;
    }
  }

  protected updateIfIsOverFifty(item: Item) {
    if (item.quality > 50) {
      item.quality = 50;
    }
  }

  GetValue(basePrice: number, quality: number) {
    let value = basePrice + quality * 10;
    return value;
  }

  //   qualityUpgrade: {
  //     isQualityUpgrade: boolean | undefined;
  //     templateUpgrade?: Map<number, number>;
  //   };
}
