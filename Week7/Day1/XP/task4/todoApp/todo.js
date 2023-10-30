class todoList {
    constructor(a,b,c){
        this.a=a;
        this.b=b;
        this.c=c;
        const tasks=[];
    }
    method1(task){
        this.tasks.push(task)
        console.log(this.tasks)
    }
    method2(task){
        const filteredTasks = this.tasks.map((item) => {
            if(item.name==task.name){
                
                if (item.isDone===false) {
                  return task.isDone===true;
                }
                // console.log(this.tasks)
                else if(item.isDone===true){
                    return task.isDone===false;
                }
    
              }})
            this.tasks=filteredTasks
            
    }
    method3(){
        this.tasks.forEach(task => 
            console.log(task)
        );
    }
}





export default todoList;