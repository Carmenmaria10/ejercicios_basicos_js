const avengers = ['Hulk', 'Thor', 'Iron Man', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(stringList) {
  let longestWord = "";
  for (const element of stringList) {
    if (element.length > longestWord.length) {
      longestWord = element;
    }
  }
  return (longestWord);
}
console.log(findLongestWord(avengers))