const name = 'Strider'; 
// let hpPoints: number | string = 95; //Manejo de dos tipos de datos string y number.
let hpPoints: number | 'Full' = 95; //Se puede especificar que tipo de valor en especifico se ocupar en la variable.
const isAlive: boolean = true;

hpPoints = 'Full';

console.log({
    name, hpPoints, isAlive
});