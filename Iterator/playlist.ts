
/**
 * Plays a song from a predefined list
 * @class
 */
class Playlist implements Iterable<string> {
    private songs: string[];
    private currentIndex: number;

    /**
     * a new instance of Playlist
     * @param {string[]} songs - The list of songs 
     * @param {number} currentIndex  
     */
    constructor(){
        this.songs = ["Song 1", "Song 2", "Song 3", "Song 4", "Song 5"];
        this.currentIndex = 0;

    }

    *[Symbol.iterator](){
        return {
            next: () => {
                if(this.currentIndex < this.songs.length){
                    const song = this.songs[this.currentIndex];
                    this.currentIndex++

                    return {value: song, done: false};
                } else {
                    return {done: true};
                }
            }
        }
    }
}

const playlist = new Playlist();

for (let song of playlist){
    console.log(`Now playing: ${song}`)
}