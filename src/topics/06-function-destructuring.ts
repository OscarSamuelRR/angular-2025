export interface Product {
    description: string;
    price: number;
}

const phone: Product = {
    description: "Nokia A115",
    price: 150.0
}

const tablet: Product = {
    description: "iPad Air",
    price: 250.0
}

export interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

export interface taxCalculationResults{
    total:number;
    tax: number;
}


export function taxCalculation(options: TaxCalculationOptions): taxCalculationResults {
    let total = 0;
    //Destructuración en arreglo
    options.products.forEach(({ price }) => {
        total += price;
    });

    let tax = total * options.tax;

    let result:taxCalculationResults = {
        total,
        tax
    }  
    
    return result;
}

const shoppingCart = [phone, tablet];
const tax = 0.15;

const options: TaxCalculationOptions = {
    tax,
    products: shoppingCart
}

const { total: totalResul, tax: taxResult } = taxCalculation(options);


const {tax: desTax, products:desProducts } = options

const [ph, tb] = desProducts;

const {description:phDescription, price:phPrice} = ph;
const { description: tbDescription, price: tbPrice } = tb;

// const { total:totalResul, tax:taxResult } = result; Mi solución 

console.log('Producto 1, descripción: ', phDescription, ', precio: ', phPrice);
console.log('Producto 2, descripción: ', tbDescription, ', precio: ', tbPrice);


console.log('Total', totalResul);
console.log('Tax', taxResult);
