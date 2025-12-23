export class Person {
    // private name: string; *Forma tradicional
    // private address: string;
    
    // constructor (name: string, adress: string){
    //     this.name = name;
    //     this.address = adress;
    // }

    constructor(private name: string, private address: string){}

    public getName() {
        return this.name;
    }

    public getAddress() {
        return this.address;
    }
}


// export class Hero extends Person{
//     constructor(
//         public alterEgo:string,
//         public age: number,
//         public realName: string,
//     ){
//         super(realName, 'Malibu, California');
//     }
// }

export class Hero{
    // public person: Person;

    constructor(
        public alterEgo: string,
        public age: number,
        public realName: string,
        public person: Person,
    ) {
        // this.person = new Person(realName, 'Malibu, California');

    }
}

const tony = new Person('Tony Stark', 'New York');
const ironman = new Hero('Iron Man', 45, 'Tony Stark', tony);

console.log(ironman);