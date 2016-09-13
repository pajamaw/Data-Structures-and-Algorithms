function Node(data){
  this.data = data;
  this.next = null;
  this.previous = null;
}

class LinkedListD{
  constructor(){
    this.head = null;
    this.end = null;
    this.count = 0;
  }
  add(data){
    const node = new Node(data);
    if (!this.head){
      this.head = node;
      this.end = node;
    }else{
      node.previous = this.end;
      this.end.next = node;
      this.end = node;
    }
    this.count++;
  }
  remove(data){
    let current = this.head;
    let cnt = this.count
    while(current){
      if(current.data === data){
        if(!current.previous){
          this.head = current.next;
          this.head.previous = null;
          this.count--;
          return `${data} removed`
        }else if(!current.next){
          this.end = current.previous;
          this.end.next = null;
          this.count--;
          return `${data} removed`
        }else{
          current.previous.next = current.next
          current.next.previous = current.previous
          this.count--;
          return `${data} removed`
      }
    }else{
      current = current.next;
      }
    }
  }
}
