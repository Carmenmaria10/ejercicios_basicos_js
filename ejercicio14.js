const words = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
];

function repeatCounter(list) {
  let Counter = {};

  for (const word of list) {
    if (Counter[word]) {
      Counter[word]++; 
    } else {
      Counter[word] = 1; 
    }
  }

  return Counter;
}

console.log(repeatCounter(words));