function sortSent(array){
  let previous = null;
  for(let i = 0; i < array.length; i++){
    if(!previous){
      previous = array[i];
      continue;
    }
    if(array[i].charAt(0) < previous.charAt(0)){
      return i;
    }
    previous = array[i];
  }
}
//////shittt noooo you can do this in a mergeSort!

////wait no you do this shit in a binary search


function findItBin(array){
  const firstWord = array[0]
  let floor = 0
  let ceiling = array.length -1

  while(floor < ceiling){
    let guessIndex = Math.floor(floor + ((ceiling - floor)/2))

    if (array[guessIndex] > firstWord){
      floor = guessIndex
    }else{
      ceiling = guessIndex
    }
    if (floor +1 === ceilng){

    break
  }
  }
  return ceilng
}
  let pivot =
}
  var words = [
    'ptolemaic',
    'retrograde',
    'supplant',
    'undulate',
    'xenoepist',
    'asymptote', // <-- rotates here!
    'babka',
    'banoffee',
    'engender',
    'karpatka',
    'othellolagkage'
];
