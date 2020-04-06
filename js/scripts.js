function TaskList(){
  this.list = [];
  this.currentId = 0;
}

TaskList.prototype.assignId = function(){
  this.currentId =+ 1;
  return this.currentId;
}

TaskList.prototype.addTask = function(task){
  task.id = this.assignId();
  this.list.push(task);

}

function Task(task){
  this.task = task;
}

$(document).ready(function(){
  $("#form-one").submit(function(event){
    event.preventDefault();
    var taskList = new TaskList();
    var newTask =$("#task").val();
    // var newTask = new Task ($("#task").val());
    taskList.assignId();
    taskList.addTask(newTask);
    alert(newTask);
    $("#output-list").text(task);
  })
})

// $(document).ready(function(){
//   $("#btn-task").onclick(function(event){
//     event.preventDefault(); 
//     var newTask = $("#task").val();
//     alert(newTask);
//     addTask(newTask);
//     alert(task);
//     $("#output-list").text(task);
//     $("#form-one").submit();
//   })
// })