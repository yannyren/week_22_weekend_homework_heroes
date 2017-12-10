const Task = function(difficultyLevel, urgencyLevel, reward){
  this.difficultyLevel = difficultyLevel;
  this.urgencyLevel = urgencyLevel;
  this.reward = reward;
  this.status = "incomplete";
}

Task.prototype.completed = function(){
  this.status = "completed";
}

module.exports = Task;
