function showTasks(){
    tasks.forEach(function(taskTitle){
        addTask(taskTitle);
    })
};

function toogleStateTaskComplate(task){
    task.classList.toggle('btn-success');     
};

function deleteTaskFunction(task){
    var delLi = task.closest('li');
    var delUl = task.closest('ul');
    delUl.removeChild(delLi);
}