const enhancer = require("./enhancer.js");
// test away!

describe("enhancer.js", () => {
  describe("repair() method", () => {
    it("should return the item object with durability restored to 100", () => {
      const item = { name: "box", enhancement: 5, durability: 78 };
      expect(enhancer.repair(item)).toEqual({ ...item, durability: 100 });
    });
  });

  describe("succeed() method", () => {
    it("should increase item's enhancement by 1 only if originally < 20", () => {
      const item = {
        name: "box",
        enhancement: 20,
        durability: 78
      };
      expect(enhancer.succeed(item)).toEqual({ ...item, enhancement: 20 });

      expect(
        enhancer.succeed({
          name: "box",
          enhancement: 3,
          durability: 78
        })
      ).toEqual({ ...item, enhancement: 4 });
    });
  });
});
