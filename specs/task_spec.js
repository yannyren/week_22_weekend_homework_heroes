const Task = require ('../task.js');
const assert = require('assert');

describe("Task", function(){
  let task;

  beforeEach(function(){
    task = new Task(10, 5, 8);
  })

  it("Task has difficulty level", function(){
    assert.strictEqual(task.difficultyLevel, 10);
  })

  it("Task has urgency level", function(){
    assert.strictEqual(task.urgencyLevel, 5);
  })

  it("Task has reward", function(){
    assert.strictEqual(task.reward, 8);
  })

  it("Task has inital status as incomplete", function(){
    assert.strictEqual(task.status, "incomplete");
  })

  it("Task is able to be marked as complete", function(){
    assert.strictEqual(task.completed(), "completed");
  })
})
