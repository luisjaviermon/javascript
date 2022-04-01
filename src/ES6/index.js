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