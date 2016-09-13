function findMax(array){
  let max_here = 0;
  let max_so_far = 0;

  for(let i =0; i<array.length; i++){
     max_here = max_here + array[i]
    if (max_here <0){
      max_here = 0
    }
    if (max_here > max_so_far){
      max_so_far = max_here
    }
  }
  return max_so_far;
}

let test = [-2, -3, 4, -1, -2, 1, 5, -3]
