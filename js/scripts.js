function Task([task]){
  this.task = task;
}

var addTask = function(string){
  this.task.push(string);
}

$(document).ready(function(){
  $("#add-task").onClick(function(){
    var newTask = $("#task").val();
    addTask(newTask);
    $("#output-list").text(task);
  })
})