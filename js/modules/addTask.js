function addTask(taskTitle){
    var addTaskOnList = document.createElement('li');
    addTaskOnList.classList.add('single-task');
    addTaskOnList.innerHTML = prepareTaskHtml(taskTitle);
    
    var toogleStateBtn = addTaskOnList.querySelector('.toogle-task-btn');
    var deleteTaskBtn = addTaskOnList.querySelector('.delete-task-btn');

    toogleStateBtn.addEventListener('click', function(){
        toogleStateTaskComplate(this);
    });

    deleteTaskBtn.addEventListener('click', function(){
        deleteTaskFunction(this);
    });

    taskContainer.appendChild(addTaskOnList);
}

function prepareTaskHtml(taskTitle){
   return  '<div class="input-group">'+
   '<span class="input-group-btn">'+
   '<button class="btn btn-default toogle-task-btn" ><i class="fa fa-check"></i></button>'+
   '</span>'+
   '<input type="text" class="form-control" placeholder="'+taskTitle+'">'+
   '<span class="input-group-btn">'+
   '<button class="btn btn-default delete-task-btn" type="submit"><i class="fa fa-times"></i></button>'+
   '</span>'+
   '</div>'+
   '</li>'
}

function addTaskEventBtnFunction(){
    taskForm.addEventListener('submit', function(e){
        e.preventDefault();
        var titleTask = this.querySelector('input').value;
        
        if(titleTask){
        addTask(titleTask);
        }else{
            alert("Wpisz tytuł zadania!")
        }

    })
};