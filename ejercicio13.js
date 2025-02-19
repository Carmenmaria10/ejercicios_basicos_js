const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];
function nameFinder(nameList, name) {
  if (nameList.includes(name)){
    const position = nameList.indexOf(name);
    return {name: true, position};
  } else {
    return {name: false};
  }
}
console.log(nameFinder(names, "Marc"));