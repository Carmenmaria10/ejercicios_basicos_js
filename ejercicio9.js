const numbers = [1, 2, 3, 5, 45, 37, 58];
function sumNumbers(numberList) {
  let total = 0;
  for (const element of numberList) {
    total += element;
    }
 return total;
 }
console.log(sumNumbers(numbers))