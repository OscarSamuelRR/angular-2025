export interface Passenger {
    name: string;
    children?: string[];
}

const passenger: Passenger = {
    name: 'Oscar'
}

const passenger2: Passenger = {
    name: 'Maria',
    children: ['Rebe', 'Bren']
}

const printChildren = (passenger: Passenger) =>{
    // let howManyChildren = passenger.children?.length || 0; atributo opcional
    if (!passenger.children) return 0; 

    const howManyChildren = passenger.children!.length; //

    console.log(passenger.name,'-', howManyChildren);

    return howManyChildren;
}

printChildren(passenger2);