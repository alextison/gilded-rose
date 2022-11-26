import ItemsRepository from "./ItemsRepository";
import FileItemsRepository from "./ItemsRepository/FileItemsRepository";
export default class Shop {
  balance = 0;
  constructor(Repository: ItemsRepository) {}

  private repository = new FileItemsRepository();

  UpdateInventory() {}

  SellItem(type: string, quality: number) {
    let item = this.repository.FindItem(type, quality);
    let value = item.getQuality();
    this.balance += value;
    this.repository.removeItem(item);
  }

  getBalance(): any {
    return this.balance;
  }
}
