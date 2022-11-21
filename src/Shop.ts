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
    isConjured: false,
  };

  BackstagePasses = {
    type: "Backstage passes",
    sellIn: 10,
    quality: 10,
    qualityUpgrade: {
      isQualityUpgrade: true,
    },
    isConjured: false,
  };

  AgedBrie = {
    type: "Aged Brie",
    sellIn: 10,
    quality: 10,
    qualityUpgrade: {
      isQualityUpgrade: true,
    },
    isConjured: false,
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
  isConjured: boolean;
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
    let templateUpgrade = item.qualityUpgrade?.templateUpgrade;
    if (templateUpgrade) {
      determinateUpgrade(item, templateUpgrade);
    } else {
      item.quality++;
    }
    updateIfIsOverFifty(item);
  } else {
    item.quality--;
    updateIfIsUnderZero(item);
  }
}

function determinateUpgrade(item, templateUpgrade) {
  let templateClosest = 255;
  let addValue = 0;
  templateUpgrade.forEach((key: number, value: number) => {
    let calculateDays = item.sellIn - value;
    if (calculateDays < templateClosest) {
      templateClosest = calculateDays;
      addValue = key;
    }
  });
  item.quality = item.quality + addValue;
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

export function exportShopItemsToJSON(shop: Shop) {
  var jsonShopItems = JSON.stringify(shop.shopItems);
  return jsonShopItems;
}
