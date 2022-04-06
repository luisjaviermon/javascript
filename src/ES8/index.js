const obj = {
  "jefe": "Marcos",
  "secretario": "julian",
  "tesorera": "emilia"
}

console.log(Object.entries(obj));
console.log(Object.values(obj));

const string = "hola";
console.log(string.padStart(string.length+3,'-->'));
console.log(string.padEnd(string.length+3,'<--'));

import { hello_world } from "./asyncAwait.js";

const hello_async = async (valor) => {
  try{
  const respuesta = await hello_world(valor);
  console.log(respuesta);
  }catch(error){
    console.log(error);
  }
};

hello_async(true);
console.log('trabajo en paralelo ...');
hello_async(false);
console.log('otro trabajo en paralelo ...');
