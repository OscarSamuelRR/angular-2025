interface AudioPlayer{
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details{
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Despacio que hay prisa",
    details: {
        author: 'Ricardo Arjona',
        year: 2025
    }
}

const song  = '70%';

const { song: anotherSong, songDuration: duration, details } = audioPlayer;

const { author: authorName, year: yearDetails } = audioPlayer.details; //Solución propia

const { author } = details; //Solución sugerida

const dbz: string [] = ['Goku', 'Vegeta', 'Trunks'];

console.log(dbz[2]);


// console.log(`Song: ${anotherSong}`);
// console.log(`Duration: ${duration}`);
// console.log(`Author: ${authorName}`);
// console.log(`Año: ${yearDetails}`);