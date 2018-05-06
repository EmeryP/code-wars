
function high(x){

  let a = 'abcdefghijklmnopqrstuvwxyz';
  var alphabetArr = a.split('');
  var arrOfWords = x.split(' ');
  var arrOfTotals = [];

  for(var i = 0; i < arrOfWords.length; i++){
    var count = 0;
    for(var j = 0; j < arrOfWords[i].length; j++){
      count = count + alphabetArr.indexOf(arrOfWords[i][j]) + 1;
    }
    arrOfTotals.push(count);
  }
  var indexOfMax = arrOfTotals.indexOf(Math.max(...arrOfTotals));
  return arrOfWords[indexOfMax];
}
