module.exports = {
  succeed,
  fail,
  repair,
  get
};

/* 

When enhancement succeeds
-- The item's enhancement increases by 1.
-- If the item enhancement level is 20, the enhancement level is not changed.
-- The durability of the item is not changed.

*/

function succeed(item) {
  const newEnhancement =
    item.enhancement === 20 ? item.enhancement : item.enhancement + 1;

  return {
    ...item,
    enhancement: newEnhancement
  };
}

/*

When enhancement fails
-- If the item's enhancement is less than 15, the durability of the item is decreased by 5.
-- If the item's enhancement is 15 or more, the durability of the item is decreased by 10.
-- If the item's enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17).

*/

function fail(item) {
  const newDurability =
    item.enhancement < 15 ? item.durability - 5 : item.durability - 10;

  const newEnhancement =
    item.enhancement > 16 ? item.enhancement - 1 : item.enhancement;

  return { ...item, enhancement: newEnhancement, durability: newDurability };
}

function repair(item) {
  return { ...item, durability: 100 };
}

function get(item) {
  return { ...item };
}
