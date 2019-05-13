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
    it("should increase item's enhancement by 1, durability is constant", () => {
      const item = {
        name: "box",
        enhancement: 3,
        durability: 78
      };
      expect(enhancer.succeed(item)).toEqual({
        ...item,
        enhancement: 4,
        durability: 78
      });
    });

    it("should not increase enhancement if enhancement is currently 20, durability is constant", () => {
      const item = {
        name: "box",
        enhancement: 20,
        durability: 53
      };
      expect(enhancer.succeed(item)).toEqual({
        ...item,
        enhancement: 20,
        durability: 53
      });
    });
  });

  describe("fail() method", () => {
    it("should decrease item durability by 5 if enhancement is less than 15", () => {
      const item = {
        name: "box",
        enhancement: 14,
        durability: 78
      };

      expect(enhancer.fail(item)).toEqual({
        ...item,
        enhancement: 14,
        durability: 73
      });
    });

    it("should decrease item durability by 10 if enhancement is 15 or more", () => {
      const item = {
        name: "box",
        enhancement: 15,
        durability: 78
      };

      expect(enhancer.fail(item)).toEqual({
        ...item,
        enhancement: 15,
        durability: 68
      });
    });

    it("should decrease enhancement by 1 if enhancement is greater than 16", () => {
        const item = {
            name: "box",
            enhancement: 17,
            durability: 78
          };
    
          expect(enhancer.fail(item)).toEqual({
            ...item,
            enhancement: 16,
            durability: 68
          });
    });

    // checking durability range restriction
    it("should not allow durability to go below zero", () => {
        const item = {
            name: "box",
            enhancement: 17,
            durability: 9
          };
        expect(
            enhancer.fail(item)
          ).toEqual({ ...item, enhancement: 16, durability: 0 });
    });
    
  });

});
