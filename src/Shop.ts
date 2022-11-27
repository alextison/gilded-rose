import ItemsRepository from "./ItemsRepository";
import FileItemsRepository from "./ItemsRepository/FileItemsRepository";
export default class Shop {
  balance = 0;
  constructor(Repository: ItemsRepository) {
    this.repository = Repository;
  }

  private repository = new FileItemsRepository();

  UpdateInventory() {}

  SellItem(type: string, quality: number) {
    let item = this.repository.FindItem(type, quality);
    let value = item.GetQuality();
    this.balance += value;
    this.repository.RemoveItem(item);
  }

  getBalance(): any {
    return this.balance;
  }
}
