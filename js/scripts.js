var taskContainer = document.querySelector('.task-container ul');
var taskForm = document.querySelector(".new-task-container form")

document.addEventListener("DOMContentLoaded", function(){
    showTasks();
    addTaskEventBtnFunction();
}) 

