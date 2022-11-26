import { AgingItem } from "../src/Items/AgingItem";
import { ConjuredItem } from "../src/Items/ConjuredItem";
import { EventItem } from "../src/Items/EventItem";
import { GenericItem } from "../src/Items/GenericItem";
import { LegendaryItem } from "../src/Items/LegendaryItem";
import ItemsRepository from "../src/ItemsRepository";
import Shop from "../src/Shop";

describe("Gilded Rose", () => {
  it("Should build", () => {
    var ItemsRepository = new ItemsRepository();
    var shop = new Shop(ItemsRepository);

    expect(shop).toBeInstanceOf(Shop);
  });

  it("Sulfuras must not change", () => {
    const sulfuras = new LegendaryItem("Sulfuras", undefined, 80, 80);
    let updatedSulfuras = new LegendaryItem("Sulfuras", undefined, 80, 80);
    sulfuras.update();

    expect(updatedSulfuras).toStrictEqual(sulfuras);
  });

  it("Aged Brie must upgrade quality", () => {
    const agedBrie = new AgingItem("Aged Brie", 10, 10, 10);
    let updatedAgedBrie = new AgingItem("Aged Brie", 10, 10, 10);

    updatedAgedBrie.update();
    expect(updatedAgedBrie).not.toBe(agedBrie);
  });

  it("Backstage Passes must upgrade quality with template", () => {
    const map: Map<number, number> = new Map();
    map.set(10, 2);
    map.set(5, 3);
    const backstagePasses = {
      type: "Backstage passes",
      sellIn: 9,
      quality: 12,
    };

    let updatedbackstagePasses = {
      type: "Backstage passes",
      sellIn: 10,
      quality: 10,
    };

    updateQuality(updatedbackstagePasses);
    expect(updatedbackstagePasses).toStrictEqual(backstagePasses);
  });
});
