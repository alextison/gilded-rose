export default class Shop {
  items: Item[];

  constructor(items = [] as Item[]) {}
  
  Sulfuras = {
    type: "Sulfuras",
    sellIn: undefined,
    quality: 80,
    qualityUpgrade: undefined,
  };

  BackstagePasses = {
    type: "Backstage passes",
    sellIn: 10,
    quality: 10,
    qualityUpgrade: true,
  };

  AgedBrie = {
    type: "Aged Brie",
    sellIn: 10,
    quality: 10,
    qualityUpgrade: true,
  };

  shopItems = [this.Sulfuras, this.BackstagePasses, this.AgedBrie];
}

interface Item {
  type: string;
  sellIn: number | undefined;
  quality: number;
  qualityUpgrade: boolean | undefined;
}

export function updateQuality(item: Item) {
  if (!isItemNameOfType(item, "Sulfuras")) {
    if (item.qualityUpgrade) {
      item.quality++;
      updateIfIsOverFifty(item);
    } else {
      item.quality--;
      updateIfIsUnderZero(item);
    }
    item.sellIn--;
  }
  return item;
}

function updateIfIsUnderZero(item: Item) {
  if (item.quality < 0) {
    item.quality = 0;
  }
}

function updateIfIsOverFifty(item: Item) {
  if (item.quality > 50) {
    item.quality = 50;
  }
}

function isItemNameOfType(item: Item, awaitedName) {
  if (item.type == awaitedName) {
    return true;
  }
  return false;
}
