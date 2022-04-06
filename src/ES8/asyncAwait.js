export const hello_world = (valor) => {
  return new Promise((resolve,reject) => {
    valor
      ? setTimeout(() => resolve('ejecucion exitosa'),3000)
      : setTimeout(() => reject(new Error('error en la ejecucion')),3000);
  });
}