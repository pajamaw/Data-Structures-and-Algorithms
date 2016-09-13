function Node(data){
  this.data = data;
  this.next = null;
}

class LinkedList{
  constructor(){
    this.head = null;
    this.end = null;
  }
  add(data){
    const node = new Node(data);
    if (!this.head){
      this.head = node;
      this.end = node;
    }else{
      this.end.next = node;
      this.end = node;
    }
  }
  remove(data) {
    let previous = this.head;
    let current = this.head;
    while(current) {
      if(current.data === data) {
        if(current === this.head) {
          this.head = this.head.next;
        }
        if(current === this.tail) {
          this.tail = previous;
        }
        previous.next = current.next;
      } else {
        previous = current;
      }
      current = current.next;
    }
  }
  print() {
    let string = '';
    let current = this.head;
    while(current) {
      string += `${current.data} `;
      current = current.next;
    }
    console.log(string.trim());
  }
}
