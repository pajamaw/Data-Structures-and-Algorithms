function deleteFromSLL(node){
  let target = node;


}

function reverse(head){
  let current = head;
  let previous = null;
  let nextNode = null;

  while(current){
    nextNode = current.next
    current.next = previous;
    previous = current;
    current = nextNode;
  }
  return previous;
}
