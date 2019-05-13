module.exports = {
  succeed,
  fail,
  repair,
  get
};

// ==== Method 1: succeed()
//  The item's enhancement increases by 1.
//  If the item enhancement level is 20, the enhancement level is not changed.
//  The durability of the item is not changed.

function succeed(item) {
  const newEnhancement =
    item.enhancement === 20 ? item.enhancement : item.enhancement + 1;

  return {
    ...item,
    enhancement: newEnhancement
  };
}

// ==== Method 2: fail()
// If the item's enhancement is less than 15, the durability of the item is decreased by 5.
// If the item's enhancement is 15 or more, the durability of the item is decreased by 10.
// If the item's enhancement level is greater than 16, the enhancement level decreases by 1 (17 goes down to 16, 18 goes down to 17).

function fail(item) {
  const newDurability =
    item.enhancement < 15 ? item.durability - 5 : item.durability - 10;

  const newEnhancement =
    item.enhancement > 16 ? item.enhancement - 1 : item.enhancement;

  return {
    ...item,
    enhancement: newEnhancement,
    durability: newDurability
  };
}

// ==== Method 3: repair()
// accepts an item object and returns a new item with the durability restored to 100.

function repair(item) {
  return {
    ...item,
    durability: 100
  };
}

// ==== Method 4: get()
// if the enhancement level is 0, the the name is not modified.
// if the enhancement level is greater than 0, change the name to include the enhancement level, preceded by a plus sign ( + ), between square brackets before the item's name. Example: the name of a "Iron Sword" enhanced to 7 would be "[+7] Iron Sword".

function get(item) {
  const newName =
    item.enhancement === 0 ? item.name : `[+${item.enhancement}] ${item.name}`;

  return {
    ...item,
    name: newName
  };
}

// ================================================
/* 

Tried to impose a range on numeric values for fail()


 const newDurability =
    item.enhancement < 15 ? 
    (item.durability  >= 5 ? item.durability - 5 : item.durability === 0 ) : 
    (item.durability >= 10 ? item.durability - 10 : item.durability == 0);

*/
