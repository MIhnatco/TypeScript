/**
 * @interface
 */

interface userProfile {
    userName: string;
    email: string;
    age: number;
    location?: string;
    bio?: string;
}

/**
 * Returns user's profile information
 * @param {object} UserProfile
 */

function printUserProfile(UserProfile: userProfile): void {
    console.log(`Name: ${UserProfile.userName}`)
    console.log(`Email: ${UserProfile.email}`)
    console.log(`Age: ${UserProfile.age}`)

    if(UserProfile.location){
        console.log(`Location: ${UserProfile.location}`)
    } else {
        console.log("No further information about 'location'.")
    }
    if(UserProfile.bio){
        console.log(`Location: ${UserProfile.bio}`)
    } else {
        console.log("No further information about 'bio'.")
    }
}


const Doe: userProfile = {
    userName: "John Doe", 
    email: "johndoe@example.com", 
    age: 34

}

printUserProfile(Doe)

const Cena: userProfile = {
    userName: "Lex Cena", 
    email: "lexcena@example.com", 
    age: 47, 
    location: "NY City, New York",
    bio: 'A professional gold miner.'

}

printUserProfile(Cena)

