function formatWords(words){

  let wordsArray = [];
  
  for(let k = 0; k < words.length; k++){ //if empty spaces, remove them and return new array
    if(words[k] !== ''){
      wordsArray.push(words[k]);
    }
  }
  // console.log(wordsArray);

  if(words.length < 0){ //if words equals 0, return an empty string
    return '';
  }
  
  if(wordsArray.length <= 1){
      return wordsArray;
      // console.log(wordsArray);
  }
  
  if(wordsArray.length >= 1){ //if words has length
    
    let wordStr = [];
    let wordStrAlmostEnd = '';
    let wordStrEnd = '';
    
    for(let i = 0; i < wordsArray.length; i++){
      
      // console.log(newWords);

      }if(i === wordsArray.length-1 && wordsArray.length > 1){ //if end of array and length greater than 1
    
        wordStrEnd = ('and ' + wordsArray[i]); //add an and to the front of the word
        
      }else if(i === wordsArray.length-2){ //if position is = to length-2
      
        wordStrAlmostEnd = (wordsArray[i] + ' '); //return the word + a space
      
      }else if (wordsArray.length > 1){ //if array is greater than 1
        
        for(let j = 0; j < 1; j++){
          wordStr.push(wordsArray[i] + ', ');  //add a comma and space to the end of the words
        }
      }
      return wordStr.join('') + wordStrAlmostEnd + wordStrEnd;
  }
}