interface AudioPlayer{
    audioVolume: number;
    sonDuration: number;
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

const { song: anotherSong, duration:songDuration } = audioPlayer;

console.log(`Song: ${song}`);
console.log(`Duration: ${audioPlayer.duration}`);
console.log(`Author: ${audioPlayer.details.author}`);