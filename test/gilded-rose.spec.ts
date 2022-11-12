import { updateQuality } from "../src/Shop";
import Shop from "../src/Shop";

describe("Gilded Rose", () => {
  it("Should build", () => {
    let shop = new Shop();
    expect(shop).toBeInstanceOf(Shop);
  });

  it("Sulfuras must not change", () => {
    const sulfuras = {
      type: "Sulfuras",
      sellIn: undefined,
      quality: 80,
      qualityUpgrade: undefined,
    };

    let updatedSulfuras = {
      type: "Sulfuras",
      sellIn: undefined,
      quality: 80,
      qualityUpgrade: undefined,
    };

    updateQuality(updatedSulfuras);
    expect(updatedSulfuras).toStrictEqual(sulfuras);
  });

  it("Aged Brie must upgrade quality", () => {
    const agedBrie = {
      type: "Aged Brie",
      sellIn: 10,
      quality: 10,
      qualityUpgrade: true,
    };

    let updatedAgedBrie = {
      type: "Aged Brie",
      sellIn: 10,
      quality: 10,
      qualityUpgrade: true,
    };

    updateQuality(updatedAgedBrie);
    expect(updatedAgedBrie).not.toBe(agedBrie);
  });

  it("Backstage Passes must upgrade quality", () => {
    const backstagePasses = {
      type: "Backstage passes",
      sellIn: 10,
      quality: 10,
      qualityUpgrade: true,
    };

    let updatedbackstagePasses = {
      type: "Aged Brie",
      sellIn: 10,
      quality: 10,
      qualityUpgrade: true,
    };

    updateQuality(updatedbackstagePasses);
    expect(updatedbackstagePasses).not.toBe(backstagePasses);
  });
});
