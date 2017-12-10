const Food = require('./food.js')

const Rat = function(){

}

Rat.prototype.touchFood = function(food) {
  food.replenishmentValue -= 2 * food.replenishmentValue;
}

module.exports = Rat;
