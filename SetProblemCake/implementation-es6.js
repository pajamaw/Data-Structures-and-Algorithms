function findUnique(array){
  const datId = new Set();

  for(let i = 0;i<array.length;i++){
    if(seen.has(array[i])){
      seen.delete(array[i])
    }else{
      seen.add(array[i])
    }
  }
  return datId.entries[0] ? datId.entries[0] : 'Not Found'
}
findUnique
  var number = 0;

  forEach (num => number ^=num)
