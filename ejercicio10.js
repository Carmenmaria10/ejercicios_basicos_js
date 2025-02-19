const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(numberList) {
  let total = 0;
  for (const element of numberList) {
    total += element;
    }
 return total / numbers.length;
}
console.log(average(numbers))