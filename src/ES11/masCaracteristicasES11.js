// BigInt
const bigInt = 9007199254740991n;
const anotherBigInt = BigInt(9007199254740991);
console.log(bigInt);
console.log(anotherBigInt);

//promise all settled
const promise1 = new Promise((resolve,reject) => reject('error'));
const promise2 = new Promise((resolve,reject) => resolve('valor'));
const promise3 = new Promise((resolve,reject) => resolve('valor'));

Promise.allSettled([promise1,promise2,promise3])
  .then(response => console.log(response));

//globalThis
console.log(globalThis);

//null operator (no disoponible en node 12.22.6)
const defaultValue = 'reserve value'
let valor = null ?? defaultValue;
let valor2 = 15 ?? defaultValue;
console.log(valor,valor2);

//optional chaining(no disoponible en node 12.22.6)
const obj = {}
console.log(obj?.data?.email);

