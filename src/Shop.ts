export default class Shop {
  items: Item[];

  constructor(items = [] as Item[]) {}

  Sulfuras = {
    type: "Sulfuras",
    sellIn: undefined,
    quality: 80,
    qualityUpgrade: {
      isQualityUpgrade: undefined,
    },
  };

  BackstagePasses = {
    type: "Backstage passes",
    sellIn: 10,
    quality: 10,
    qualityUpgrade: {
      isQualityUpgrade: true,
    },
  };

  AgedBrie = {
    type: "Aged Brie",
    sellIn: 10,
    quality: 10,
    qualityUpgrade: {
      isQualityUpgrade: true,
    },
  };

  shopItems = [this.Sulfuras, this.BackstagePasses, this.AgedBrie];
}

interface Item {
  type: string;
  sellIn: number | undefined;
  quality: number;
  qualityUpgrade: {
    isQualityUpgrade: boolean | undefined;
    templateUpgrade?: Map<number, number>;
  };
}

export function updateQuality(item: Item) {
  if (!isItemNameOfType(item, "Sulfuras")) {
    updateQualityOfItem(item);
    item.sellIn--;
  }
  return item;
}

function updateQualityOfItem(item: Item) {
  if (item.qualityUpgrade.isQualityUpgrade) {
    if (item.qualityUpgrade.templateUpgrade) {
      // Iterate over the map
    }
    item.quality++;
    updateIfIsOverFifty(item);
  } else {
    item.quality--;
    updateIfIsUnderZero(item);
  }
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
