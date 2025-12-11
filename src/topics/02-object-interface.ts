const skills:string[] = ['Bash','Counter','Healing']; //Arreglo de strings

interface Character {
    name: string;
    hp: number;
    skills: string [];
    hometown?: string; //Opcional por signo de interrogación
}

const strider:Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter'],
    // hometown: "Cuernavaca"
}

strider.hometown = 'Raccon City'

console.table(strider);