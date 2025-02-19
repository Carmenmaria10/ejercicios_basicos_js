const users = [
  { name: "Tony", years: 43 },
  { name: "Peter", years: 18 },
  { name: "Natasha", years: 14 },
  { name: "Bruce", years: 32 },
  { name: "Khamala", years: 16 },
];

for(const user of users) {
  if (user.years >= 18) {
    console.log(`Usuarios mayores de edad: ${user.name}`);
  // NO SÉ SI LO PIDE EN UN SOLO BUBLE O EN DOS BUCLES DISTINTOS, POR SI ACASO PONGO COMO SERÍA SI SON MENORES USANDO SOLO ESTE BUCLE:
  // } else {
  //   console.log(`Usuarios menores de edad: ${user.name}`);
  }
}

for(const user of users) {
  if (user.years < 18) {
    console.log(`Usuarios menores de edad: ${user.name}`);
  }
}