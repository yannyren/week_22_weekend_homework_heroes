const Hero = function(name, health, favFood){
  this.name = name;
  this.health =health;
  this.favFood = favFood;
  this.tasks = [];
}

Hero.prototype.sayName = function(){
  return this.name;
}

Hero.prototype.eat = function(food){
  if (food === this.favFood) {
    this.health += food.replenishmentValue * 1.5;
  }
  this.health = food.replenishmentValue;
}

Hero.prototype.addTask = function(task){
  this.tasks.push(task);
}

Hero.prototype.sortTasks = function(criterion) {
  this.tasks.sort(function(task1, task2){
    return task1.criterion - task2.criterion;
  })
}

Hero.prototype.viewTasksByStatus = function(status) {
  if(this.tasks.length === 0){
    return "hero has no tasks yet."
  }
  return this.tasks.map(function(task){
    return task.status === status;
    })
}



module.exports = Hero;
