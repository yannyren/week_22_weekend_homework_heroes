const Rat = require('../rat.js');
const Food = require('../food.js');
const Hero = require('../hero.js');
const assert = require('assert');

describe("Rat", function(){
  let rat;
  let food;
  let hero;

  beforeEach(function(){
    rat = new Rat();
    food = new Food("curry", 10);
    hero = new Hero("Jack", 100, "curry")
  })

  it("Rat can touch food and turn it poisonous", function(){
    rat.touchFood(food);
    hero.eat(food);
    assert.strictEqual(food.replenishmentValue, -10);
    assert.strictEqual(hero.health, 90);
  } )
})
