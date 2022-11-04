export default class Shop {}

interface Item {
  type: string;
  sellIn: number | null;
  quality: number;
  qualityUpgrade: boolean | null;
}

function updateQuality(item: Item) {
  // item.sellIn = ;
  // item.quality = ;
}

function isUnderZero(item: Item) {}

function isOverFifty(item: Item) {}

function isItemNameOfType(item: Item, awaitedName) {
  if (item.type == awaitedName) {
    return true;
  }
  return false;
}

const Sulfuras = {
  type: "Sulfuras",
  sellIn: null,
  quality: 80,
  qualityUpgrade: null,
};
let BackstagePasses = {
  type: "Backstage passes",
  sellIn: 10,
  quality: 10,
  qualityUpgrade: true,
};
let AgedBrie = {
  type: "Aged Brie",
  sellIn: 10,
  quality: 10,
  qualityUpgrade: true,
};
