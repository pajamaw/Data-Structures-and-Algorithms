class HashTable{
  constructor(size){
    this.values = {};
    this.numberOfValues = 0;
    this.size = size;
  }

  add(key, value){
    const hash = this.calculateHash(key);
    if(!this.values.hasOwnProperty(hash)){
      this.values[hash] = {};
    }
    if(!this.values[hash].hasOwnProperty(key)){
      this.numberOfValues++;
    }
    this.values[hash][key] = value;
  }
  remove(key){
    const hash = this.calculateHash(key);
    if(this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)){
      delete this.values[hash][key];
      this.numberOfValues--;
    }
  }

  calculateHash(key){
    return key.toString().length % this.size;
  }

  search(key){
    const hash = this.calculateHash(key);
    if(this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)){
      return this.values[hash][key];
    }else{
      console.log('not found');
      return null;
    }
  }
}

class HashTable{
  constructor(size){
    this.numberOfValues = 0;
    this.values = {}
    this.size = size;
  }
  add(key, value){
    const hash = this.calculateHash(key);
    if(!this.values.hasOwnProperty(hash)){
       this.values[hash] = {}
    }
    if (!this.values[hash].hasOwnProperty(key)){
      this.numberOfValues++
    }
    this.values[hash][key] = value;
    
  }
  search(key){
    const hash = this.calculateHash(key);
    if(this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)){
      return this.values[hash][key]
    }else{
      console.log('not found!')
    }
  }
  remove(key){
    const hash = this.calculateHash(key);
    if(this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)){
       delete this.values[hash][key];
       this.numberOfValues--;
       console.log('entry removed')
    }else{
      console.log('entry does not exist!')
    }
  }
  calculateHash(key){
    return key.toString().length % this.size;
  }
}
