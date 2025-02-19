let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

//6.1
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}

//6.2
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i]%2 === 0) {
  console.log(numeros[i]);
  }
}

//6.3
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] === 9) {
    console.log("¡Dormido!");
  } else {
    console.log("Intentando dormir 🐑");
  }
}
