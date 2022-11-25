import Item from "../Item";

export default class InMemoryItemsRepository {
  items: Item[];
  constructor(items = [] as Item[]) {}
}
