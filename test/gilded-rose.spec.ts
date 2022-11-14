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
      qualityUpgrade: {
        isQualityUpgrade: undefined,
      },
    };

    let updatedSulfuras = {
      type: "Sulfuras",
      sellIn: undefined,
      quality: 80,
      qualityUpgrade: {
        isQualityUpgrade: undefined,
      },
    };

    updateQuality(updatedSulfuras);
    expect(updatedSulfuras).toStrictEqual(sulfuras);
  });

  it("Aged Brie must upgrade quality", () => {
    const agedBrie = {
      type: "Aged Brie",
      sellIn: 10,
      quality: 10,
      qualityUpgrade: {
        isQualityUpgrade: true,
      },
    };

    let updatedAgedBrie = {
      type: "Aged Brie",
      sellIn: 10,
      quality: 10,
      qualityUpgrade: {
        isQualityUpgrade: true,
      },
    };

    updateQuality(updatedAgedBrie);
    expect(updatedAgedBrie).not.toBe(agedBrie);
  });

  it("Backstage Passes must upgrade quality", () => {
    const map: Map<number, number> = new Map();
    map.set(5, 3);
    map.set(10, 2);
    const backstagePasses = {
      type: "Backstage passes",
      sellIn: 10,
      quality: 10,
      qualityUpgrade: {
        isQualityUpgrade: true,
        templateUpgrade: map,
      },
    };

    let updatedbackstagePasses = {
      type: "Backstage passes",
      sellIn: 10,
      quality: 10,
      qualityUpgrade: {
        isQualityUpgrade: true,
        templateUpgrade: map,
      },
    };

    updateQuality(updatedbackstagePasses);
    expect(updatedbackstagePasses).not.toBe(backstagePasses);
  });
});
