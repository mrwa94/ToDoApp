

document.querySelector('#push').onclick = function (){
    if (document.querySelector('#add_task input').value.length == 0) {
             alert("الرجاء اضافة مهمة ");
    }


    else{
        //   addBTN.classList.add("active");

      
        document.querySelector('#task').innerHTML +=
       `
        <div id="task">
            
        <ui id="todolist">
            <li > 
    

            </input>
            ${document.querySelector('#add_task input').value}
                
                <span class ="delete">
               <i class="bi bi-trash  "></i>
                </span>
                 </li>
            </ui>
            </div> 
        ` ;



        

        //delete task ..

        var current_tasks = document.querySelectorAll(" .delete  ");
        for(var i =0 ; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }

      //  select completed task
    
     




     
       

        //delete task from input ..
        document.querySelector('#add_task input').value = "" ;
        
    }
    




}


let todo = document.getElementById('task');
let inputTask = document.getElementById('inputTask');
let addbtn = document.getElementById('push');

addbtn.addEventListener('click' , function(){
    var para = todo;
   // para.classList.add('paragraph-styling')
//para.innerText = inputTask.value;
   // todo.appendChild(para);
   // inputTask.value= "";
        para.addEventListener ('dblclick' , function(){
      
        para.style.textDecoration = "line-through";
  
       })

   })

    