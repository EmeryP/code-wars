
var countSheep = function (num){
  let sheepArr = [];
  for(let i = 1; i <= num; i++){
    var numCount = (i + ' sheep...');
    sheepArr.push(numCount);
  }
  return sheepArr.join('');
};