/**
 * @interface
 */
/**
 * Returns user's profile information
 * @param {object} UserProfile
 */
function printUserProfile(UserProfile) {
    console.log("Name: ".concat(UserProfile.userName));
    console.log("Email: ".concat(UserProfile.email));
    console.log("Age: ".concat(UserProfile.age));
    if (UserProfile.location !== undefined) {
        console.log("Location: ".concat(UserProfile.location));
    }
    else {
        console.log("No further information about 'location'.");
    }
    if (UserProfile.bio !== undefined) {
        console.log("Location: ".concat(UserProfile.bio));
    }
    else {
        console.log("No further information about 'bio'.");
    }
}
var Doe = {
    userName: "John Doe",
    email: "johndoe@example.com",
    age: 34
};
printUserProfile(Doe);
var Cena = {
    userName: "Lex Cena",
    email: "lexcena@example.com",
    age: 47,
    location: "NY City, New York",
    bio: 'A professional gold miner.'
};
printUserProfile(Cena);
