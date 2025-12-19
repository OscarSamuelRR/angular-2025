import { taxCalculation } from './06-function-destructuring'; //Forma correcta de importa interfaces
import type { Product } from './06-function-destructuring';

const shoppingCart: Product[] = [
    {
        description: 'Nokia 2',
        price: 100
    },
    {
        description: 'iPad 2',
        price: 150
    },
];

const { total: totalResul, tax: taxResult } = taxCalculation({
    tax: 0.15,
    products: shoppingCart
});

console.log('Total', totalResul);
console.log('Tax', taxResult);