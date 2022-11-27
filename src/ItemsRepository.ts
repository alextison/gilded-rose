import Item from "./Item";

export default interface ItemsRepository {
  items: Item[];
  GetInventory(): Item[];
  FindItem(type: string, quality: number): Item;
  SaveInventory(items: Item[]): void;
  RemoveItem(item: Item): void;
}
