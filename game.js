var deck =  [{ code: "&#x1F0A1", weight: 1, name: "Ace of Spades", suit: "Spades"},
            { code: "&#x1F0A2", weight: 2, name: "Two of Spades", suit: "Spades"},
            { code: "&#x1F0A3", weight: 3, name: "Three of Spades", suit: "Spades"},
            { code: "&#x1F0A4", weight: 4, name: "Four of Spades", suit: "Spades"},
            { code: "&#x1F0A5", weight: 5, name: "Five of Spades", suit: "Spades"},
            { code: "&#x1F0A6", weight: 6, name: "Six of Spades", suit: "Spades"},
            { code: "&#x1F0A7", weight: 7, name: "Seven of Spades", suit: "Spades"},
            { code: "&#x1F0A8", weight: 8, name: "Eight of Spades", suit: "Spades"},
            { code: "&#x1F0A9", weight: 9, name: "Nine of Spades", suit: "Spades"},
            { code: "&#x1F0AA", weight: 10, name: "Ten of Spades", suit: "Spades"},
            { code: "&#x1F0AB", weight: 11, name: "Jack of Spades", suit: "Spades"},
            { code: "&#x1F0AD", weight: 12, name: "Queen of Spades", suit: "Spades"},
            { code: "&#x1F0AE", weight: 13, name: "King of Spades", suit: "Spades"},
            { code: "&#x1F0B1", weight: 1, name: "Ace of Hearts", suit: "Hearts"},
            { code: "&#x1F0B2", weight: 2, name: "Two of Hearts", suit: "Hearts"},
            { code: "&#x1F0B3", weight: 3, name:"Three of Hearts", suit: "Hearts"},
            { code: "&#x1F0B4", weight: 4, name: "Four of Hearts", suit: "Hearts"},
            { code: "&#x1F0B5", weight: 5, name: "Five of Hearts", suit: "Hearts"},
            { code: "&#x1F0B6", weight: 6, name: "Six of Hearts", suit: "Hearts"},
            { code: "&#x1F0B7", weight: 7, name: "Seven of Hearts", suit: "Hearts"},
            { code: "&#x1F0B8", weight: 8, name: "Eight of Hearts", suit: "Hearts"},
            { code: "&#x1F0B9", weight: 9, name: "Nine of Hearts", suit: "Hearts"},
            { code: "&#x1F0BA", weight: 10, name: "Ten of Hearts", suit: "Hearts"},
            { code: "&#x1F0BB", weight: 11, name: "Jack of Hearts", suit: "Hearts"},
            { code: "&#x1F0BD", weight: 12, name: "Queen of Hearts", suit: "Hearts"},
            { code: "&#x1F0BE", weight: 13, name: "King of Hearts", suit: "Hearts"},
            { code: '&#x1F0C1', weight: 1, name: "Ace of Diamonds", suit: 'Diamonds'},
            { code: '&#x1F0C2', weight: 2, name: "Two of Diamonds", suit: 'Diamonds'},
            { code: '&#x1F0C3', weight: 3, name: "Three of Diamonds", suit: 'Diamonds'},
            { code: '&#x1F0C4', weight: 4, name: "Four of Diamonds", suit: 'Diamonds'},
            { code: '&#x1F0C5', weight: 5, name: "Five of Diamonds", suit: 'Diamonds'},
            { code: '&#x1F0C6', weight: 6, name: "Six of Diamonds", suit: 'Diamonds'},
            { code: '&#x1F0C7', weight: 7, name: "Seven of Diamonds", suit: 'Diamonds'},
            { code: '&#x1F0C8', weight: 8, name: "Eight of Diamonds", suit: 'Diamonds'},
            { code: '&#x1F0C9', weight: 9, name: "Nine of Diamonds", suit: 'Diamonds'},
            { code: '&#x1F0CA', weight: 10, name: "Ten of Diamonds", suit: 'Diamonds'},
            { code: '&#x1F0CB', weight: 11, name: "Jack of Diamonds", suit: 'Diamonds'},
            { code: '&#x1F0CD', weight: 12, name: "Queen of Diamonds", suit: 'Diamonds'},
            { code: '&#x1F0CE', weight: 13, name: "King of Diamonds", suit: 'Diamonds'},
            { code:'&#x1F0D1', weight: 1, name:'Ace of Clubs', suit: 'Clubs'},
            { code:'&#x1F0D2', weight: 2, name:'Two of Clubs', suit:'Clubs'},
            { code:'&#x1F0D3', weight: 3, name:'Three of Clubs', suit:'Clubs'},
            { code:'&#x1F0D4', weight: 4, name:'Four of Clubs', suit:'Clubs'},
            { code:'&#x1F0D5', weight: 5, name:'Five of Clubs', suit:'Clubs'},
            { code:'&#x1F0D6', weight: 6, name:'Six of Clubs', suit:'Clubs'},
            { code:'&#x1F0D7', weight: 7, name:'Seven of Clubs', suit:'Clubs'},
            { code:'&#x1F0D8', weight: 8, name:'Eight of Clubs', suit:'Clubs'},
            { code:'&#x1F0D9', weight: 9, name:'Nine of Clubs', suit:'Clubs'},
            { code:'&#x1F0DA', weight: 10, name:'Ten of Clubs', suit:'Clubs'},
            { code:'&#x1F0DB', weight: 11, name:'Jack of Clubs', suit:'Clubs'},
            { code:'&#x1F0DD', weight: 12, name:'Queen of Clubs', suit:'Clubs'},
            { code:'&#x1F0DE', weight: 13, name:'King of Clubs', suit:'Clubs'}
          ];

//deals a hand, functions the same way as the _.sample function
function dealHand(array, num){
  var arrayCopy = array.slice();
  if(num===undefined) {
    num = 1;
  }
  var randArray = [];
  for(var i=0;i<num;i++){
    var index = Math.floor(Math.random()*arrayCopy.length);
    randArray.push(arrayCopy.splice(index,1)[0]);
  }
  return randArray;
}
//displays the hand to the console.
function displayHand(array){
  console.log('Your hand is:');
  for(var i=0;i<array.length;i++){
    console.log(array[i].name);
  }
}

//scores the hand
//currently only checks if the hand has a pair
function scoreHand(array) {
  if(royalFlush(array)){
    console.log("HOLY SHIT YOU GOT A ROYAL FLUSH");
    return true;
  }
  if(straightFlush(array)){
    console.log("You got a straight flush!");
    return true;
  }
  if(straight(array)){
    console.log("You got a straight!");
    return true;
  }
  if (flush(array)){
    console.log("You got a flush");
    return true;
  }
  if (fullHouse(array)){
    console.log("You got a full house");
    return true;
  }
  if (fourOfAKind(array)){
    console.log("You got 4 of a kind");
    return true;
  }
  if (threeOfAKind(array)){
    console.log("You got 3 of a kind");
    return true;
  }
  if (contains2Pair(array)){
    console.log("You got 2 pair!");
    return true;
  }
  if (containsPair(array)) {
   console.log("You got a pair!");
   return true;
  }
   loseMessage();
   return false;
}

//checks for a pair
function containsPair(array){
  for(var i=0;i<array.length;i++){
    for(var k=0;k<array.length;k++){
      //first condition checks if 2 cards in the hand have the same value
      //second condition ensures that we aren't checking the same card
      if(array[i].weight===array[k].weight&&array[i].name!==array[k].name){
        return true;
      }
    }
  }
  return false;
}

//checks for 2 pair
function contains2Pair(array){
  var tempHand = array.slice();
  if (containsPair(array)){//checks if the hand has a pair, if it does go and remove the pair cards
    var i=0;
    while(i<tempHand.length){
      for(var k=0;k<tempHand.length;k++){
        //first condition checks if 2 cards in the hand have the same value
        //second condition ensures that we aren't checking the same card
        if(tempHand[i].weight===tempHand[k].weight&&tempHand[i].name!==tempHand[k].name){
          //remove the 2 cards from our tempHand
          tempHand.splice(i,1);
          i=tempHand.length+1;
          tempHand.splice(k-1,1);
          break;
        }
      }
      i++;
    }
    if(containsPair(tempHand)){
      return true;
    }
  }
  return false;
}

//checks for a 3 of a kind
function threeOfAKind(array){
  for (var i=0;i<array.length;i++){
    for(var k=i+1;k<array.length;k++){
      if(array[i].weight===array[k].weight&&array[i].name!==array[k].name){  //checks if 2 cards are the same
        for (var j=k+1;j<array.length;j++){  //moves to check if any of the rest of the cards match the pair
          if(array[i].weight===array[j].weight&&array[i].name!==array[j].name){
            return true;
          }
        }
      }
    }
  }
  return false;
}

//checks for a 4 of a kind
function fourOfAKind(array){
  for (var i=0;i<array.length;i++){
    for (var k=i+1;k<array.length;k++){
      if(array[i].weight===array[k].weight&&array[i].name!==array[k].name){  //checks if 2 cards are the same
        for (var j=k+1;j<array.length;j++){  //moves to check if any of the rest of the cards match the pair
          if (array[i].weight===array[j].weight&&array[i].name!==array[j].name){
            for (var p=j+1;p<array.length;p++) {  //checks to see if the remaining cards match the 3 of a kind
              if (array[i].weight===array[p].weight&&array[i].name!==array[p].name){
                return true;
              }
            }
          }
        }
      }
    }
  }
}

//checks for a full house
function fullHouse(array){
  if(threeOfAKind(array)){
    var tempHand = array.slice();
    var i = 0;
    while (i<tempHand.length){
      var j = i+1;
      while (j<tempHand.length){
        if (tempHand[i].name===tempHand[j].name){
          for (var k=j+1;k<tempHand.length;k++){
            if(tempHand[i].name===tempHand[k].name){
              tempHand.splice(i,1);
              tempHand.splice(j-1,1);
              tempHand.splice(k-2,1);
              j+=100;
              i+=100;
              break;
            }
          }
        }
        j++;
      }
      i++;
    }
    if (containsPair(tempHand)){
      return true;
    }//three of a kind has been removed, much check if remaining cards are a pair
  }
  return false;
}

//checks for a flush
function flush(array){
  for(var i=0;i<array.length-1;i++){
    if(array[i].suit===array[i+1].suit){ //checks if the current card has the same suit as the next card
      if(i===array.length-2){ //if its checking the last 2 cards returns true
        return true;
      }
      continue;
    } else { //returns false if at any point 2 cards don't have the same suit
      return false;
    }
  }
}

//checks for a straight
//similar structure as flush
function straight(array){
  var tempHand = array.slice();
  tempHand.sort(function (a, b){return a.weight - b.weight}); //sorts array by card weight
  for(var i=0;i<tempHand.length-1;i++){
    //checks if the card to the right of this card is sequetial
    //special case: if the first card is an ace and the second is a 10 it is still true
    if(tempHand[i].weight+1===tempHand[i+1].weight||(tempHand[0].weight===1&&tempHand[1].weight===10)){
      if(i===array.length-2){
        return true;
      }
      continue;
    } else {
      return false;
    }
  }
}

//checks for straight flush
function straightFlush(array){
  if (flush(array)&&straight(array)){
    return true;
  }
  return false;
}

//checks for royal flush
function royalFlush(array){
  if(straightFlush){
    var tempHand=array.slice();
    tempHand.sort(function (a, b){return a.weight - b.weight});
    if(tempHand[0].weight===1&&tempHand[1].weight===10){
      return true;
    }
  }
}
//displays a message that you lost the hand to the console
function loseMessage(){
  switch(Math.floor(Math.random()*5)){
    case 1: {console.log("You are terrible at this");}
            break;
    case 2: {console.log("Really?");}
            break;
    case 3: {console.log("You should just give up.");}
            break;
    case 4: {console.log("Wow, still nothing?");}
            break;
    case 5: {console.log("Just kill yourself");}
            break;
    default: {console.log("Your score is bad and you should feel bad!")}
  }
}


// hand = dealHand(deck,5);
// displayHand(hand);
// scoreHand(hand);
var testHand = [deck[12],deck[11],deck[10],deck[9],deck[0]];
displayHand(testHand);
scoreHand(testHand);
