///can do an array in o (n) time and o(2n)/o(n) super
//super efficient but the problem is (the only problem) is that you

///you need to know the max value of the array

//it utilizes the o(1) lookup time for arrays

function countingSort(array, max){
  //first we need to setup the array
  //that will hold all the number instances
  let numsToCount = [];
  let sortedArray = [];
  let currentSortIndex = 0;

  for(let i = 0; i<max + 1; i++){
    numsToCount[i] = 0;
  }

  //now that we have that let's populate it
  array.forEach(num => numsToCount[num] +=1)

//  array.forEach(function(num){
//    numsToCount[num] += 1
//  })

  //now we need our double iterations
  for(let num = 0; num < numsToCount.length; num++){
    let count = numsToCount[num]

    for(let x = 0; x < count; x++){
      sortedArray[currentSortIndex] = num;
      currentSortIndex++
    }
  }
  return sortedArray;
}
const test = [1, 67, 90, 91, 62, 74, 5, 84, 27, 83, 37, 92, 97, 58, 42, 53, 13, 46, 95, 14, 38, 15, 88, 21, 36, 56, 45, 40, 100, 60, 32, 86, 8, 39, 66, 24, 89, 57, 99, 33, 77, 28, 22, 94, 54, 52, 18, 11, 34, 30, 12, 29, 85, 79, 6, 59, 71, 82, 55, 44, 47, 72, 64, 9, 3, 16, 76, 96]


function countingSort(array, max){

  let currentIndex = 0
  let numsToCount = []
  let sortedArray = [];

  for(let i = 0; i < max+1; i++){
    numsToCount[i] = 0;
  }

  array.forEach(num => numsToCount[num]+=1);

  for(let num = 0; num<numsToCount.length; num++){
    let count = numsToCount[num];
    for(let x = 0; x < count;)
  }
}
