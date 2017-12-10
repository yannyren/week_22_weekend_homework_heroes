const Hero = require('../hero.js');
const Food = require('../food.js');
const Task = require('../task.js');
const assert = require('assert');

describe("Hero", function(){

  let hero;
  let food1;
  let food2;
  let task1;
  let task2;
  let task3;
  let task4;

  beforeEach(function(){
    hero = new Hero("Jack", 100, "curry");
    food1 = new Food("carrot", 10);
    food2 = new Food("curry", 10);
    task1 = new Task(10, 8 ,5 , incomplete);
    task2 = new Task(9, 10, 4, incomplete);
    task3 = new Task(12, 3, 10, complete);
    task4 = new Task(3, 7, 8, complete);

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

  it("Hero can eat food and health goes up by the replenishmentValue", function(){
    hero.eat(food1);
    assert.strictEqual(hero.health, 110);
  })

  it("Hero eats fav food and health goes up by 1.5 * food value", function(){
    hero.eat(food2);
    assert.strictEqual(hero.health, 115);
  })

  it("Hero can add task to the list", function(){
    hero.addTask(task1);
    assert.strictEqual(hero.tasks.length, 1);
  })

  it("Hero can sort tasks by difficulty, urgency or reward", function(){
    hero.addTask(task1);
    hero.addTask(task2);
    hero.addTask(task3);
    hero.addTask(task4);
    let result1 = hero.sortTasks(difficultyLevel);
    let result2 = hero.sortTasks(urgencyLevel);
    let result3 = hero.sortTasks(reward);
    assert.strictDeepEqual(result1, [task4, task2, task1, task3]);
    assert.strictDeepEqual(result2, [task3, task4, task1, task2]);
    assert.strictDeepEqual(result1, [task2, task1, task4, task3]);
  })

  it("Hero is able to see tasks that are marked completed", function(){
    hero.addTask(task1);
    hero.addTask(task2);
    hero.addTask(task3);
    hero.addTask(task4);
    let completedTasks = hero.viewTasksByStatus("completed");
    let incompleteTasks = hero.viewTasksByStatus("incomplete")
    assert.stictDeepEqual(completedTasks, [task3, task4]);
    assert.strictDeepEqual(incompleteTasks, [task1, task2]);
  })

  it("Hero has response when no tasks in the list to sort", function(){
    assert.strictDeepEqual(hero.viewTasksByStatus("complete"), "hero has no tasks yet.");
    assert.strictDeepEqual(hero.viewTasksByStatus("incomplete"), "hero has no tasks yet.")
  })

})
