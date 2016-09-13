function Node(data){
  this.data = data;
  this.left = null;
  this.right = null;
}

class MinHeap{
  constructor(){
    this.root = null;
  }
  add(data){
    const node = new Node(data)
    if(!this.root){
      this.root = node;
    }else{
      let current = this.root;
      if(current.data > node.data){
        if(!current.left){
          node.left = current;
          node.right = current.right
          current.right = null;
        }
        if(!current.right){
          node.right = current
          node.left = current.left;
          current.left = null
        }

        node.left = this.root.left;
        node.right = this.root.right;

      }
    }
  }
}
