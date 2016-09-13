function printFibTill(n){
  console.log(n)
  return n<2 ? 1 : printFibTill(n-1) + printFibTill(n - 2)
}

function printFibTillLoop(n){
  let a = 0, b=1, f=1;
  for(let i = 2; i <n; i++){
    f = a + b;
    a = b;
    b = f;
  }
  return f;
}

function findSpecificFibs(array){
  let firstReq = array[0];
  let secondReq = array[1];
  let thirdReq = array[2];

  console.log(array)
  let a = 0, b=1, f=1;
  for(let i = 2; i <firstReq; i++){
    f = a+b;
    a = b;
    b = f;
  }
  array[0] = f;
  a = 0, b=1, f=1;
  for(i = 2; i <secondReq; i++){
    f = a +b;
    a = b;
    b = f;
  }
  array[1] = f
  a = 0, b=1, f=1;
  for( i = 2; i <thirdReq; i++){
    f = a +b;
    a = b;
    b = f;
  }
  array[2] = f;
  return array;
}

// findSpecificFibs([3,5,4])
//return [2, , 5]

function fibIterative(n) {

  // edge case
  if (n < 0) {
      throw new Error('Index was negative. No such thing as a negative index in a series.');

  // base cases
  } else if (n === 0 || n === 1) {
      return n;
  }

  let prev = 0;
  let prevPrev = 1;
  let current = 0;

  for (let x = 0; x < n; x++) {
      current = prev + prevPrev;
      prevPrev = prev;
      prev = current;
  }

  return current;
}

class FibMemo{
  constructor(){
    this.memo = {};
  }
  makeFib(n){
    // edge case
    if (n < 0) {
        throw new Error('Index was negative. No such thing as a negative index in a series.');

    // base cases
    } else if (n === 0 || n === 1) {
        return n;
    }

    // see if we've already calculated this
    if (this.memo.hasOwnProperty(n)) {
        console.log('grabbing memo[' + n + ']');
        return this.memo[n];
    }

    console.log('computing fib(' + n + ')');
    let result = this.makeFib(n-1) + this.makeFib(n-2);

    // memoize
    this.memo[n] = result;

    return result;
  }
};

class FibMemo{
  constructor(){
    this.memo = {};
  }
  makeFib(n){
    // edge case
    let resultArr = [];
    while (n){
      if (n < 0) {
          throw new Error('Index was negative. No such thing as a negative index in a series.');

      // base cases
      } else if (n === 0 || n === 1) {
          return n;
      }

      // see if we've already calculated this
      if (this.memo.hasOwnProperty(n)) {
          console.log('grabbing memo[' + n + ']');
          return this.memo[n];
      }

      console.log('computing fib(' + n + ')');
      let result = this.makeFib(n-1) + this.makeFib(n-2);

      // memoize
      this.memo[n] = result;

       resultArr<<result;
    }

  }
};

//for interview cakes
class FibWithMemo{
  constructor(){
    this.memo = {}
  }
  getN(n){
    let results = []
    if (n<0){
      throw new Error('fucked up')
    }else if(n===0 ||n===1){
      return n
    }
    if (this.memo.hasOwnProperty(n)){
      return this.memo[n]
    }

    let result = this.getN(n-1) + this.getN(n-2)
    this.memo[n] = result
    results << result
}
