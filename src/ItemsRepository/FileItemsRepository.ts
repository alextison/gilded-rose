import Item from "../Item";
import ItemsRepository from "../ItemsRepository";

export default class FileItemsRepository implements ItemsRepository {
  items: Item[];
  constructor(items = [] as Item[]) {}

  fs = require("fs");

  GetInventory(): Item[] {
    let itemsInventory = [];
    this.fs.readFile("items.txt", function (err, data) {
      itemsInventory = data.toString();
    });

    return itemsInventory;
  }

  FindItem(type: string, quality: number): Item {
    var inventory = this.GetInventory();
    return inventory.find(
      (item) => item.type === type && item.getQuality() === quality
    );
  }

  SaveInventory(): void {
    this.fs.writeFile(
      "items.txt",
      JSON.stringify(this.items),
      function (err) {}
    );
  }
}
