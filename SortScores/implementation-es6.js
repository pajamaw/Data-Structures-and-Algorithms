function sortScores(scores, maxScore){
  let scoresToBeSorted = [];
  for(let i = 0; i<maxScore; i++){
    scoresToBeSorted[i] = 0;
  }

  scores.forEach(num => scoresToBeSorted[num]+=1)

  let sortedScores = [];
  let currentScoreIndex = 0;


  for(let score = 0; score < scoresToBeSorted.length; score++){
    let count = scoresToBeSorted[score]
    for(let x = 0;x<count; x++){
      sortedScores[currentScoreIndex] = score
      currentScoreIndex++;
    }
  }
  return sortedScores
}

function getRandom(floor, ceiling) {
  return Math.floor(Math.random() * (ceiling - floor + 1)) + floor;
}

function shuffle(theArray) {
  // if it's 1 or 0 items, just return
  if (theArray.length <= 1) return;

  // walk through from beginning to end
  for (var indexWeAreChoosingFor = 0; indexWeAreChoosingFor < theArray.length; indexWeAreChoosingFor++) {

      // choose a random not-yet-placed item to place there
      // (could also be the item currently in that spot)
      // must be an item AFTER the current item, because the stuff
      // before has all already been placed
      var randomChoiceIndex = getRandom(indexWeAreChoosingFor, theArray.length - 1);

      // place our random choice in the spot by swapping
      [theArray[indexWeAreChoosingFor], theArray[randomChoiceIndex]] = [theArray[randomChoiceIndex], theArray[indexWeAreChoosingFor]]

      console.log(theArray)
  }
}

function isSingleRiffle(half1, half2, shuffledDeck) {
  var half1Index = 0;
  var half2Index = 0;
  var half1MaxIndex = half1.length - 1;
  var half2MaxIndex = half2.length - 1;

  for (var i = 0; i < shuffledDeck.length; i++) {
      var card = shuffledDeck[i];

      // if we still have cards in half1
      // and the "top" card in half1 is the same
      // as the top card in shuffledDeck
      if (half1Index <= half1MaxIndex &&
              card === half1[half1Index]) {
          half1Index++;

      // if we still have cards in half2
      // and the "top" card in half2 is the same
      // as the top card in shuffledDeck
      } else if (half2Index <= half2MaxIndex &&
              card === half2[half2Index]) {
          half2Index++;

      // if the top card in shuffledDeck doesn't match the top
      // card in half1 or half2, this isn't a single riffle.
      } else {
          return false;
      }
  }

  // all cards in shuffledDeck have been "accounted for"
  // so this is a single riffle!
  return true;
}
