const enhancer = require("./enhancer.js");
// test away!

describe("enhancer.js", () => {
  describe("repair() method", () => {
    it("should return the item object with durability restored to 100", () => {
      const item = { name: "box", enhancement: 5, durability: 78 };
      expect(enhancer.repair(item)).toEqual({ ...item, durability: 100 });
    });
  });
});
