function TaskList(){
  this.list = [];
}

TaskList.prototype.addTask = function(task){
  this.list.push(task);
}

function Task(task){
  this.task = task;
}

$(document).ready(function(){
  $("#form-one").submit(function(event){
    event.preventDefault();
    var taskList = new TaskList();
    var newTask = new Task ($("#task").val());
    taskList.addTask(newTask);
    alert(newTask);
    $("#output-list") = JSON.stringify(taskList);
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