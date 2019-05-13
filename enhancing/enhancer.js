module.exports = {
  succeed,
  fail,
  repair,
  get,
};

/* 

When enhancement succeeds
-- The item's enhancement increases by 1.
-- If the item enhancement level is 20, the enhancement level is not changed.
-- The durability of the item is not changed.

*/

function succeed(item) {

  const toEnhance = (item.enhancement == 20) ? item.enhancement : item.enhancement+1;

  return { 
    ...item,
  enhancement: toEnhance
  //(20 ? item.enhancement : item.enhancement + 1 )
};
}

function fail(item) {
  return { ...item };
}

function repair(item) {
  return { ...item, durability: 100  };
}

function get(item) {
  return { ...item };
}
