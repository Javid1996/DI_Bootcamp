let task_name = document.getElementById('task_name')
let description = document.getElementById('description')
let start = document.getElementById('start-time')
let end = document.getElementById('end-time')
let form_input = document.getElementsByClassName("form_input");
let form = document.getElementById('task_form');
let button = document.getElementById('btn');
let taskArray=[];
form_input.value = "";
let list = document.getElementById('list')
let li;


// let form  = document.getElementById('task_form')
// form.addEventListener('submit', function() {
    
    //     let task_value= stringify.json(form.vale)
    
    //     localStorage.setItem('task', task_value);
    
    
    button.addEventListener('click', function(e) {
        //    let ObjStorage = {
            //     name: name;
            //     description:description
            // 
            // ObjStorage.push(form_input.value);
            // console.log(form.value);
            e.preventDefault();
            let ObjStorage={
                name: task_name.value,
                description: description.value,
                start: start.value,
                end: end.value};
            // ObjStorage.name=task_name.value;
            // // console.log(task_name.value);
            // ObjStorage.description=description.value;
            // ObjStorage.start_date=start.value;
            // ObjStorage.end_date=end.value;
            // console.log(ObjStorage);
            taskArray.push(ObjStorage);
            // console.log('taskArray',taskArray);
            //  Object.entries(ObjStorage));
            localStorage.setItem("task", JSON.stringify(taskArray));
            
            // listBuilder();
           
           
            //    });
            
            getListOFTasks();
            
        });
        
        
   
        
        function getListOFTasks(){
            list.innerHTML="";
                let valueFromLocalStorage = JSON.parse(localStorage.getItem('task'));
              for (i = 0; i < valueFromLocalStorage.length; ++i) {
                //   li = document.createElement('li');
                 
                // //   console.log(valueFromLocalStorage);
                //   li.innerText = `Task: ${valueFromLocalStorage[i].name}  Date: ${valueFromLocalStorage[i].start} Days:${howManyDays(valueFromLocalStorage[i].start,valueFromLocalStorage[i].end)}`;
                
                //     let p =document.createElement('p'); 
                //       p.innerText = ` Description: ${valueFromLocalStorage[i].description}`
                //       p.setAttribute('id',valueFromLocalStorage[i].name)

                //   li.addEventListener('click',function(){
                      
                //       let description_p= document.querySelector('p');
                //         description_p.style.visibility='visible'
                      let days = howManyDays(valueFromLocalStorage[i].start,valueFromLocalStorage[i].end)
                    // });
                     li= createTask(valueFromLocalStorage[i].name , valueFromLocalStorage[i].start, days);
                    // console.log(valueFromLocalStorage[i]);
                    
                    
                    list.appendChild(li);
                }
            }
            

            function createTask(task,task2,days){
                const taskElement = document.createElement('div');
                taskElement.textContent = `Task: ${task}  Date: ${task2}  Days: ${days}`;
                taskElement.classList.add('task');
                reset_button(taskElement);
                let descriptionDiv = document.createElement('div'); 
                descriptionDiv.classList.add('descriptionDiv');
                let xButton = document.createElement('input')
                xButton.setAttribute("type", "reset");
                xButton.setAttribute("value", "X");
                createCheckBox(taskElement,days);
                taskElement.appendChild(descriptionDiv);

               
                 
                
                
                xButton.addEventListener('click',(e) => {
                    
                    e.target.parentElement.remove(); //e.target = innerDiv
                    // innerDiv.innerHTML= "";
                    
                });
                
                
                
                
                taskElement.addEventListener('click', ()=>{
                    const tasks = JSON.parse(localStorage.getItem('task'));
                    console.log(tasks);
                    const selectedTask = tasks.find((t) => t.name === task);
                    console.log(selectedTask.description);
                    descriptionDiv.textContent = selectedTask.description;
                    descriptionDiv.style.visibility = 'visible';
                    xButton.setAttribute("class", "x_button");
                    xButton.setAttribute('class','reset_btn');
                    xButton.style.visibility = 'visible';
                    descriptionDiv.appendChild(xButton);
                  
                   
// const descriptionDiv = document.getElementById('description-div');
// descriptionDiv.textContent = selectedTask;
// descriptionDiv.style.visibility = 'visible';
                })
                return taskElement;
            }


          
            function howManyDays(start,end){
                let day;
                let sec;
                var current =new Date();
                var start = new Date(start);
                var end = new Date(end);
                console.log(current) ;
                console.log(start) ;
                console.log(end) ;


                if(start>current){
                   sec = end.getTime()-current.getTime()
                   day = Math.ceil(sec/(1000*3600*24))
                }else{
                   sec = end.getTime()-start.getTime()
                   day = Math.ceil(sec/(1000*3600*24))
                }
                return day;
            }
          
            function createCheckBox(taskElement,day){
                const checkbox = document.createElement("input");
                checkbox.type = "checkbox"; 
                checkbox.classList.add('check')
                // checkbox = setAttribute("class","check");
                // Checkbox = setAttribute("",'checkbox');
                taskElement.appendChild(checkbox)

                checkbox.addEventListener("change", () => {
                    taskElement.classList.remove("isChecked");
                if (day < 0) {
                    taskElement.classList.add("timeIsOver");
                } else if(checkbox.checked) {
                    taskElement.classList.add("isChecked");
                }else{
                    taskElement.classList.remove("isChecked");
                }
                });
            };


            function reset_button(li){

                let resetButton = document.createElement('input')
                resetButton.setAttribute("type", "reset");
                resetButton.setAttribute('class','reset_btn');
                resetButton.setAttribute("value", "X");
                li.appendChild(resetButton);
                resetButton.addEventListener('click',(e) => {
                    
                    e.target.parentElement.remove(); //e.target = innerDiv
                    // innerDiv.innerHTML= "";
                    
                });

            }

            // function UpdateFeatures(checkbox) {
            //     var boxContent = document.querySelector(".boxContent");
            //     boxContent.classList.remove("isChecked");
            //     if (checkbox.checked) {
            //       boxContent.classList.add("isChecked");
            //     }
            //   }


            //   .isChecked {
            //     color: blue;
            //     border:2px solid blue;
            //   }

            // !!! working correctly