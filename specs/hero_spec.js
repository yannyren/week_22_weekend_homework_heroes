const Hero = require('../hero.js');
const assert = require('assert');

describe("Hero", function(){

  let hero;

  beforeEach(function(){
    hero = new Hero("Jack", 100, curry);
  })

  it("Hero has a name", function(){
    assert.strictEqual(hero.name, "Jack");
  })

  it("Hero has health", function(){
    assert.strictEqual(hero.health, 100);
  })

  it("Hero has fav food", function(){
    assert.strictEqual(hero.favFood, "curry");
  })

  it("Hero has 0 task to complete at the beginning", function(){
    assert.strictEqual(hero.tasks.length, 0);
  })

  it("Hero can say their name", function(){
    assert.strictEqual(hero.sayName(), "Jack");
  })

})
