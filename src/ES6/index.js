/* ecmascript 6 */
//funcion antes de es6

function new_function(name,age,country){
  var name = name || 'Oscar';
  var age = age || 32;
  var country = country || 'MX';
  console.log(name,age,country);
}

//Parametros por defecto
function new_fucntion2(name='Oscar',age=32,country='MX'){
  console.log(name,age,country);
}

new_fucntion2();
new_fucntion2('Javier',23,'COL');
let hello = "hello";
let world = "world";
//cadenas de plantilla
console.log(`${hello} ${world}`);

//multilinea
//antes es6
console.log("esta es una frase\n" + 
"y esta es otra");
//es6
console.log(`esta es una frase epica
y esta es otra mas epica`);

//desestructuracion 
const person = {
  name: 'javier',
  age: 23,
  country: 'MEX'
};
//antes 
console.log(person.name,person.age);
//es6
let { name,age } = person;
console.log(name,age);

//spread operator
let team1 = ['Oscar','Julian','Ricardo'];
let team2 = ['Valeria', 'Yesica','Camila'];

let team = ['David',...team1,...team2];
console.log(team);

{
  var globalVar = "globalVar";
  let localVar = "localVar";
}

console.log(localVar);

//promesas
function hello_promise(){
  return new Promise((resolve,reject) => {
    if(true){
      resolve('exito');
    }else{
      reject('ocurrio un error');
    }
  })
}

hello_promise()
  .then(response => console.log(response))
  .then(() => console.log('funcion terminada con exito'))
  .catch(error => console.log(error));

//clases
class auto{
  constructor(modelo, marca){
    this.modelo = modelo;
    this.marca = marca;
  }

  getAuto(){
    console.log(`el la marca ${this.marca} tiene el modelo ${this.modelo}`);
  }
}

const auto1 = new auto('chevy','chevrolet');
auto1.getAuto();

import { hello_module, num } from './module.js';
console.log(hello_module(),num);

//funciones generadoras
function* hello_generator(){
  if(true){
    yield 'hello';
  }
  if(true){
    yield 'world';
  }
}

const generator_hello = hello_generator();
console.log(generator_hello.next().value);
console.log(generator_hello.next().value);