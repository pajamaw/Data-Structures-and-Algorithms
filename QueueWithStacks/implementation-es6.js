///two stacks



function Queue(){

  let Enqueue = [];
  let Dequeue = [];


}

class Queue{
  constructor(){
    this.stackE = [];
    this.stackD = [];
  }
  enqueue(item){
    this.stackE.push(item);
  }
  dequeue(){
    let dequeueItem;
    if(this.stackE!==[] && this.stackD===[]){
      while(this.stackE !== []){
        let transitionItem = this.stackE.pop();
        this.stackD.push(transitionItem)
      }
       dequeueItem = this.stackD.pop();
      return dequeueItem;
    }else if(this.stackD!==[]){

    }
  }
}
