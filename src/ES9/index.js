//operador de reposo
const obj = {
  name: 'javier',
  age: 23,
  country: 'MX'
};

let {name,...remanent} = obj;
console.log(remanent);
//{ age: 23, country: 'MX' }

let {age,...all} = obj;
console.log(all);
//{ name: 'javier', country: 'MX' }

//operador de propagacion
const object1 = {
  name: 'javier',
  age: 23
};

const object2 = {
  country: 'MX'
};

const objectAll = {
  ...object1,
  ...object2
};
console.log(objectAll);
//{ name: 'javier', age: 23, country: 'MX' }

//promise.finally
const helloWorld = (valor) => {
  return new Promise((resolve,reject) => {
    valor == 200
      ? setTimeout(()=>resolve('ejecucion exitora'),2000)
      : reject(new Error(`error de ejecucion con codigo: ${valor}`))
  });
}

helloWorld('200')
  .then(resolve => {console.log(resolve)})
  .catch(error => console.log(error.message))
  .finally(() => console.log('finalizo la promesa'));

  
helloWorld(500)
.then(resolve => {console.log(resolve)})
.catch(error => console.log(error.message))
.finally(() => console.log('finalizo la promesa'));

//regex agrupation 
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('1998-09-22');
const year = match[1];
const month = match[2];
const day = match [3];
console.log(`${year}/${month}/${day}`);