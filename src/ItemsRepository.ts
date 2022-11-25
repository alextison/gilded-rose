import Item from "./Item";

export default class ItemsRepository {
  items: Item[];
  constructor(items = [] as Item[]) {}
  GetInventory() {}
  FindItem(type: string, quality: number) {}
  SaveInventory() {}
}
