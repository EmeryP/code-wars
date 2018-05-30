function expressionMatter(a, b, c) {
  var one = a * (b + c);
  var two = a * b * c;
  var three = a + b * c;
  var four = (a + b) * c;

  var numberOne = 0;
  var numberTwo = 0;
  var finalNum = 0;

  if(a === 1 && b === 1 && c === 1){
    return a + b + c;
  }

  if(a === 1 && c === 1){
    return a + b + c;
  }

  function analyzeNumOne (one, two){
    if(one > two){
      numberOne = one;
    } else
      numberOne = two;
  }
  analyzeNumOne(one, two);

  function analyzeNumTwo (three, four){
    if(three > four){
      numberTwo = three;
    } else
      numberTwo = four;
  }
  analyzeNumTwo(three, four);

  function analyzeFinalNum (numberOne, numberTwo){
    if(numberOne > numberTwo){
      finalNum = numberOne;
    } else
      finalNum = numberTwo;
  }
  analyzeFinalNum(numberOne, numberTwo);
  return finalNum;
}