import Item from "./Item";
export default class Shop {
  items: Item[];

  constructor(items = [] as Item[]) {}

  // Sulfuras = {
  //   type: "Sulfuras",
  //   sellIn: undefined,
  //   quality: 80,
  //   qualityUpgrade: {
  //     isQualityUpgrade: undefined,
  //   },
  //   isConjured: false,
  // };

  // BackstagePasses = {
  //   type: "Backstage passes",
  //   sellIn: 10,
  //   quality: 10,
  //   qualityUpgrade: {
  //     isQualityUpgrade: true,
  //   },
  //   isConjured: false,
  // };

  // AgedBrie = {
  //   type: "Aged Brie",
  //   sellIn: 10,
  //   quality: 10,
  //   qualityUpgrade: {
  //     isQualityUpgrade: true,
  //   },
  //   isConjured: false,
  // };
  shopItems = [];
}

export function exportShopItemsToJSON(shop: Shop) {
  var jsonShopItems = JSON.stringify(shop.shopItems);
  return jsonShopItems;
}
