export function whatsMyType<T>(argument: T): T{//Usado para reutilizar clases, variables, funciones o metodos con diferente tipo de dato esperado y retornado
    return argument;
}

let amIString = whatsMyType<string>('Ejemplo de cadena');
let amINumber = whatsMyType<number>(100);
let amIArray = whatsMyType<number []>([1, 2, 3, 4, 5]);

console.log(amIString.split(' '));
console.log(amINumber.toFixed());
console.log(amIArray.join('-'));