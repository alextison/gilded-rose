import Item from "./Item";

export default interface ItemsRepository {
  GetInventory(): Item[];
  FindItem(type: string, quality: number): Item;
  SaveInventory(items: Item[]): void;
}
