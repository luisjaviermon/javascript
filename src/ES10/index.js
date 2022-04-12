//array.flat
const array = [1,2,3,[1,2,[3]],[1,2,3,[4,[5]]]];
console.log(array.flat());
console.log(array.flat(2));
console.log(array.flat(3));

//array.flatMap()
const array2 = [1,2,3,4];
console.log(array2.flatMap(value => [value,value**2,['fin']]));

//string.trimStart()
const message = '        hello';
const message2 = 'world        ';
console.log(`${message.trimStart()} ${message2.trimEnd()}`);

//optional catch finding
const funcion = () => {
  console.log('hola');
  throw new Error();
}

try{
  funcion();
}catch{
  console.log('este es un mensaje del catch');
}

//Object.entries
const arrObj = [['name','luis'],['age',23]];
console.log(Object.fromEntries(arrObj));

//symbol.description
const mySymbol = 'symbol';
const symbol = Symbol(mySymbol);
console.log(symbol.description);
