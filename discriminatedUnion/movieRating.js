var good = {
    rating: "Good",
    message: "A unique masterpiece."
};
var average = {
    rating: "Average",
    message: "Not bad...worth the money."
};
var bad = {
    rating: "Bad",
    message: "Not worth the money nor time."
};
function showRating(rat) {
    switch (rat.rating) {
        case "Good":
            console.log("".concat(rat.message));
            break;
        case "Average":
            console.log("".concat(rat.message));
            break;
        case 'Bad':
            console.log("".concat(rat.message));
            break;
    }
}
showRating(good);
showRating(average);
showRating(bad);
