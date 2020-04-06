function Task(){
  this.task = [];
}

Task.prototype.addTask = function(string){
  this.task.push(string);
}


$(document).ready(function(){
  $("#form-one").submit(function(event){
    event.preventDefault();
    var newTask = $("#task").val();
    addTask(newTask);
    alert(task);
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