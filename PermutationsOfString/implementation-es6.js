1. cat//2. act..3. atc..4..cta 5. tac tca
class Memo{
  constructor(){
    if(!instance){
      instance = this;
    }
    this.memo = {};
  }
}


function getPermutations(string){

  if(string.length <=1){
    return new Set(string);
  }
  let allCharsExceptLast = string.slice(0, -1)
  let lastChar = string[string.length-1]

  let permutationsOfAllCharsExceptLast = getPermutations(allCharsExceptLast)

  let permutations = new Set();

  permutationsOfAllCharsExceptLast.forEach(function(permutationOfAllCharsExceptLast){
    for(let position = 0; position<= allCharsExceptLast.length;position++){
      let permutation = permutationOfAllCharsExceptLast.slice(0, position) + lastChar + permutationOfAllCharsExceptLast.slice(position);
      permutations.add(permutation)
    }
  });
  return permutations;
}
