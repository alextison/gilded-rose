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

class GenericItem extends Item {
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

class AgingItem extends Item {
  constructor(
    type: string,
    sellIn: number,
    quality: number,
    basePrice: number
  ) {
    super(type, sellIn, quality, basePrice);
  }

  update() {
    if (this.sellIn >= 0) {
      this.quality += 3;
    } else if (this.sellIn > 5) {
      this.quality += 2;
    } else if (this.sellIn > 10) {
      this.quality += 1;
    }
    this.updateIfIsOverFifty(this);
    this.updateIfIsUnderZero(this);
    if (this.sellIn !== 0) {
      this.sellIn--;
    }
  }
}

class EventItem extends Item {
  constructor(
    type: string,
    sellIn: number | undefined,
    quality: number,
    basePrice: number
  ) {
    super(type, sellIn, quality, basePrice);
  }

  update() {
    if ((this.sellIn = 0)) {
      this.quality = 0;
    } else if (this.sellIn >= 1) {
      this.quality += 3;
    } else if (this.sellIn > 5) {
      this.quality += 2;
    } else if (this.sellIn > 10) {
      this.quality += 1;
    }
    this.updateIfIsOverFifty(this);
    this.updateIfIsUnderZero(this);
    if (this.sellIn !== 0) {
      this.sellIn--;
    }
  }
}

class LegendaryItem extends Item {
  constructor(
    type: string,
    sellIn: number | undefined,
    quality: number,
    basePrice: number
  ) {
    super(type, sellIn, quality, basePrice);
  }
  update() {}
}

class ConjuredItem extends Item {
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
