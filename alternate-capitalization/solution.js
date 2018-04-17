//Alternate capitalization kata

function capitalize(s){

  let solution = '';
  let j = 0;

  if(j === 0){

    for(let i = 0; i < s.length; i++){

      if(i % 2 !== 0){
        solution += s[i].toLowerCase();
      } else {
        solution += s[i].toUpperCase();
      }
    }
    solution += ' ';
    j++;
  }if (j === 1){
    for(let i = 0; i < s.length; i++){

      if(i % 2 !== 0){
        solution += s[i].toUpperCase();
      } else {
        solution += s[i].toLowerCase();
      }
    }
  }
  let solutionArray = solution.split(' ');

  return solutionArray;
}
