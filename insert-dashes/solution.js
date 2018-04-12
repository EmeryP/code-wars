
function insertDash(num) {
  var numArr = num.toString().split('');
  var len = numArr.length;
  var final = [];
  for (var i = 0; i < len; i++){
    final.push(numArr[i]);
    if (numArr[i]%2 !== 0){
      if (i+1 < len && numArr[i+1]%2 !== 0) {
        final.push('-');
      }
    }
  }
  return final.join('');
}

// let num = '454793'

// function insertDash(num) {

//   let numSplit = num.split("");

//   let number = numSplit.length;

//   let newArray = [];


//   for(let i = 0; i < number; i++){

//     if(numSplit[i] % 2 !== 0 && numSplit[i+1] % 2 !== 0 ){
//       console.log(numSplit[i]);
//       newArray.push(numSplit[i]);
//     }
//     if(numSplit[i] % 2 !== 0 && numSplit[i+1] % 2 !== 0 ){
//       console.log(numSplit[i]);
//       newArray.push(numSplit[i]);
//     }

//     }
//   }
// }

// insertDash(num);



// // latest answer
// let num = '454793'

// function insertDash(num) {

//   let numSplit = num.split("");

//   let number = numSplit.length;

//   let newArray = [];


//   for(let i = 0; i < number; i++){

//     if((numSplit[i] % 2 === 0 || numSplit[i] % 2 !== 0) && (numSplit[i+1] % 2 === 0)){
//       // console.log(numSplit[i]);
//       newArray.push(numSplit[i]);

//       if(numSplit[i] % 2 !== 0 && numSplit[i+1] % 2 !== 0 ){
//         // console.log(numSplit[i]);
//         newArray.push(numSplit[i]);
//         newArray.push('-');
//       }
//     }


//     }
//     // console.log(numSplit);
//     console.log(newArray.toString());
//   }
// // }

// insertDash(num);


