function classDecorator<T extends {new (...args:any[]): {}}>(constructor: T){
    return class extends constructor {
        newProperty = 'New Property';
        hello = 'override';
    }
}

//El decorador (son funciones) añade caracteristicas extra a nuestras clases. Lo puede volver un componente, servicio, etc. Siempre se consumen. Extraño hacerlos de 0 

@classDecorator
export class SuperClass {
    public myProperty: string = 'Abc123';

    print(){
        console.log('Hola mundo');
    }
}

console.log(SuperClass);

const myClass = new SuperClass();

console.log(myClass);