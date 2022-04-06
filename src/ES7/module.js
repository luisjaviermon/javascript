export const funcion_includes = (arreglo,valor) => {
  if(arreglo.includes(valor)){
    console.log(`el valor ${valor} si existe`);
  }else{
    console.log(`el valor ${valor} no existe`);
  }
}