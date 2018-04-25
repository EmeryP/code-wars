let x = 'man i need a taxi up to ubud';

function high(x){ //create function 

  let a = 'abcdefghijklmnopqrstuvwxyz'; //assign alphabet as global variable 
  let alphabetArr = a.split(''); //split alphabet string into an array so we can iterate over
  
  let c = x.split(''); //split x into an array of word elements
  let count = 0; //use running sum to count vars
  
  c.forEach(function(el, i){ //possibly nest forEach's or a for loop within a forEach
    console.log(el);
    alphabetArr.forEach(function(el, i){
      console.log(i)
    })
  })
  // for(let i = 0; i < alphabetArr.length; i++){  //iterate over alphabetArr
    
  //   for(let j = 0; j < c.length; j++){ possibly nest for loops to iterate over the alphabetArr and split x
  //     if(c[j] === alphabetArr[i]){
  //     }
  //   }
    // count++;
    //increase the counter by i of alphabetArr
    //for each element of the array, print out the index in relation to it's position in the alphabet

  // }
  // return count;
  //return a; //return array
}

high(x);