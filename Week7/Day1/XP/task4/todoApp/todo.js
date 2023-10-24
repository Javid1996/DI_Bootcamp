class todoList {
    constructor(a,b,c){
        this.a=a;
        this.b=b;
        this.c=c;
        const tasks=[]
    }
    method1(){
        tasks.push(this.a,this.b,this.c)
        console.log(tasks)
    }
    method2(){
        const filteredTasks = tasks.map((item) => {
            if (item===false) {
              return item===true;
            }console.log(tasks);

          });
    }
    method3(){
        tasks.forEach(task => 
            console.log(task)
        );
    }
}





export default todoList;