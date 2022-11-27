import { AgingItem } from "../src/Items/AgingItem";
import { ConjuredItem } from "../src/Items/ConjuredItem";
import { EventItem } from "../src/Items/EventItem";
import { GenericItem } from "../src/Items/GenericItem";
import { LegendaryItem } from "../src/Items/LegendaryItem";
import FileItemsRepository from "../src/ItemsRepository/FileItemsRepository";
import Shop from "../src/Shop";

describe("Gilded Rose", () => {
  it("Should build", () => {
    var shop = new Shop(new FileItemsRepository());

    expect(shop).toBeInstanceOf(Shop);
  });

  it("Aging Item must upgrade quality", () => {
    const agedBrie = new AgingItem("Aged Brie", 10, 10, 10);
    let updatedAgedBrie = new AgingItem("Aged Brie", 10, 10, 10);
    updatedAgedBrie.Update();

    expect(updatedAgedBrie).not.toBe(agedBrie);
  });

  it("Conjured Item must upgrade quality", () => {
    const conjuredItem = new ConjuredItem("Conjured Item", 10, 10, 10);
    let updatedConjuredItem = new ConjuredItem("Conjured Item", 10, 10, 10);
    updatedConjuredItem.Update();

    expect(updatedConjuredItem).not.toStrictEqual(conjuredItem);
  });

  it("Event Item must upgrade quality", () => {
    const backstagePasses = new EventItem("Backstage Passes", 10, 10, 10);
    let updatedbackstagePasses = new EventItem("Backstage Passes", 10, 10, 10);
    updatedbackstagePasses.Update();

    expect(updatedbackstagePasses).not.toStrictEqual(backstagePasses);
  });

  it("Generic Item must upgrade quality", () => {
    const genericItem = new GenericItem("Generic Item", 10, 10, 10);
    let updatedGenericItem = new GenericItem("Generic Item", 10, 10, 10);
    updatedGenericItem.Update();

    expect(updatedGenericItem).not.toStrictEqual(genericItem);
  });

  it("Legendary Item must not change", () => {
    const sulfuras = new LegendaryItem("Sulfuras", undefined, 80, 80);
    let updatedSulfuras = new LegendaryItem("Sulfuras", undefined, 80, 80);
    sulfuras.Update();

    expect(updatedSulfuras).toStrictEqual(sulfuras);
  });
});
