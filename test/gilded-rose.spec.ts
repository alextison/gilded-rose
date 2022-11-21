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
      isConjured: false,
    };

    let updatedSulfuras = {
      type: "Sulfuras",
      sellIn: undefined,
      quality: 80,
      qualityUpgrade: {
        isQualityUpgrade: undefined,
      },
      isConjured: false,
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
      isConjured: false,
    };

    let updatedAgedBrie = {
      type: "Aged Brie",
      sellIn: 10,
      quality: 10,
      qualityUpgrade: {
        isQualityUpgrade: true,
      },
      isConjured: false,
    };

    updateQuality(updatedAgedBrie);
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
      qualityUpgrade: {
        isQualityUpgrade: true,
        templateUpgrade: map,
      },
      isConjured: false,
    };

    let updatedbackstagePasses = {
      type: "Backstage passes",
      sellIn: 10,
      quality: 10,
      qualityUpgrade: {
        isQualityUpgrade: true,
        templateUpgrade: map,
      },
      isConjured: false,
    };

    updateQuality(updatedbackstagePasses);
    expect(updatedbackstagePasses).toStrictEqual(backstagePasses);
  });
});
