import Item from "../Item";

export default class FileItemsRepository {
  items: Item[];
  constructor(items = [] as Item[]) {}
}
