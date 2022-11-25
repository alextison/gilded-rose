import Item from "./Item";
export default class Shop {
  items: Item[];
  constructor(items = [] as Item[]) {}
  shopItems = [];

  UpdateInventory() {}
  SellItem(type: string, quality: number) {}
}

export function exportShopItemsToJSON(shop: Shop) {
  var jsonShopItems = JSON.stringify(shop.shopItems);
  return jsonShopItems;
}
