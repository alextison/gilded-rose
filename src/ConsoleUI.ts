import FileItemsRepository from "./ItemsRepository/FileItemsRepository";
import Shop from "./Shop";

export default class ConsoleUI {
  private shop = new Shop(new FileItemsRepository());

  DisplayInventory() {
    console.log(this.shop);
  }

  DisplayBalance() {
    console.log(this.shop.getBalance());
  }

  UpdateInventory() {
    this.shop.UpdateInventory();
  }

  SellItem(type: string, quality: number) {
    this.shop.SellItem(type, quality);
  }
}
