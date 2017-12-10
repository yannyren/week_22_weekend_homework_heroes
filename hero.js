const Hero = function(name, health, favFood){
  this.name = name;
  this.health =health;
  this.favFood = favFood;
  this.tasks = [];
}

Hero.prototype.sayName = function(){
  return this.name;
}



module.exports = Hero;
