function quicksortBasic(array){
  if(array.length < 2){
    return array
  }
  const pivot = array[0]
  const lesser = [];
  const greater = [];

  for(let i = 1; i < array.length; i++){
    if(array[i] < pivot){
      lesser.push(array[i]);
    }else{
      greater.push(array[i])
    }
  }

  return quicksortBasic(lesser.concat(pivot, quicksortBasic(greater)))
}
//we'll use this in the recursive
//so you first jsut throw in your array
//these will be the pivot points
function quicksort(array, left, right){
  //left is start
  //right is the end
  left = left || 0;
  right = right || array.length -1;
  //finds the largest number and puts it to the end
  const pivot = partitionHoare(array, left, right);
  //then has you sort again it
  console.log(array)
  if(left < pivot -1){
    //with one less assumed number
    quicksort(array, left, pivot -1);
  }
  if(right > pivot){
    //if
    quicksort(array, pivot, right);
  }
  return array;
}

function partitionHoare(array, left, right){
  //so you first get pivot by doing the middle
  const pivot = Math.floor((left + right)/ 2);
//while start index is smaller than end index
//which is the entire thing
  while(left <= right){

    //while the starting value is less than the middle
    //until you find a value on the left side that
    //is larger than the pivot
    //continue looking right
    while(array[left] < array[pivot]){
    left++;
    }
    //until you find a value thats smaller than
    //the middle value
    // keep looking left
    while(array[right] > array[pivot]){
      right--;
    }
    //if the left index is smaller or equal to right
    ///if the left value was larger than the pivot value
    //and the right value was smaller than

    if(left <= right){
      //within this fake array
      //swap the smallest around the pivot the largest numbers
      [array[left], array[right]] = [array[right], array[left]];
      left++;
      right--;
    }
  }
  return left;
}


quicksort(array, left, right){
  left = left || 0
  right = right || array.length -1

  const pivot = partition(array, left, right)

  if(left < )
}
