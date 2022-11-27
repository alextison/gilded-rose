import Item from "../Item";
import ItemsRepository from "../ItemsRepository";

export default class InMemoryItemsRepository implements ItemsRepository {
  items: Item[];
  constructor(items = [] as Item[]) {}

  GetInventory(): Item[] {
    return this.items;
  }

  FindItem(type: string, quality: number): Item {
    return this.items.find(
      (item) => item.type === type && item.GetQuality() === quality
    );
  }

  SaveInventory(items: Item[]): void {
    this.items = items;
  }

  RemoveItem(item: Item): void {
    var inventory = this.GetInventory();
    var index = inventory.indexOf(item);
    inventory.splice(index, 1);
    this.SaveInventory(inventory);
  }
}
