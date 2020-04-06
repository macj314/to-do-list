function TaskList(){
  this.list = [];
}

TaskList.prototype.addTask = function(string){
  this.task.push(string);
}

function Task(task){
  this.task = task;
}

$(document).ready(function(){
  $("#form-one").submit(function(event){
    event.preventDefault();
    var newTask = new Task ($("#task").val());
    addTask(newTask);
    alert(newTask);
    $("#output-list").text(TaskList);
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