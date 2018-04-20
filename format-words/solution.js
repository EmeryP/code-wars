function formatWords(words){
  console.log(words);
  let wordsArray = [];

  if(words === null || words.length < 1){
    return '';
  }

  for(let k = 0; k < words.length; k++){
    if(words[k] !== ''){
      wordsArray.push(words[k]);
    }
  }

  if(wordsArray.length <= 1){
    return wordsArray.toString('');
  }

  if(wordsArray.length >= 1){

    let wordStr = [];
    let wordStrAlmostEnd = '';
    let wordStrEnd = '';

    for(let i = 0; i < wordsArray.length; i++){

      if(i === wordsArray.length-1 && wordsArray.length > 1){
        wordStrEnd = ('and ' + wordsArray[i]);

      }else if(i === wordsArray.length-2){
        wordStrAlmostEnd = (wordsArray[i] + ' ');

      }else if (wordsArray.length > 1){
        for(let j = 0; j < 1; j++){
          wordStr.push(wordsArray[i] + ', ');
        }
      }
    }
    return wordStr.join('') + wordStrAlmostEnd + wordStrEnd;
  }
}













