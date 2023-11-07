
/**
 * Represents a movie rating with a rating label and a message.
 */
type MovieRating = {rating: "Good" , message: string} | {rating:"Average", message: string} | {rating: "Bad", message: string};


const good: MovieRating = {
    rating: "Good", 
    message: "A unique masterpiece."
    }

const average: MovieRating = {
    rating: "Average", 
    message: "Not bad...worth the money."
}

const bad: MovieRating = {
    rating: "Bad", 
    message: "Not worth the money nor time."
}


/**
 * Displays the message associated with a movie rating.
 * @param {MovieRating} rat - The movie rating to display.
 */
function showRating(rat: MovieRating) {
    switch(rat.rating){
        case "Good":
            console.log(`Good Rating: ${rat.message}`);
            break;
        case "Average":
            console.log(`Average Rating: ${rat.message}`);
            break;
        case 'Bad':
            console.log(`Bad Rating: ${rat.message}`);
            break;
    }
}

// Display movie ratings

showRating(good);
showRating(average);
showRating(bad);