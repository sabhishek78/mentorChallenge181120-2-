
function countVowels(string){
  let count=0;
  for(let i=0;i<string.length;i++){
    switch(string[i]){
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
      case 'A':
      case 'E':
      case 'I':
      case 'O':
      case 'U': count++;
                break;
      default: break;
      }
 
  }
     return count;
}
console.log(countVowels("Celebration"));// should return 5
console.log(countVowels("Palm"));// should return 1
console.log(countVowels("Prediction"));// should return 4