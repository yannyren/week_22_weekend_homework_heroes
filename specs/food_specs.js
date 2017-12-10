const Food = require("../food.js");
const assert = require("assert");

describe("Food", function(){
  let food;

  beforeEach(function(){
    food = new Food("curry", 10);
  })

  it("Food has name", function(){
    assert.strictEqual(food.name, "curry");
  })

  it("Food has replenish value", function(){
    assert.strictEqual(food.replenishmentValue, 10);
  })
})
