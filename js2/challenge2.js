// Enum Types mini-challenge
// Replace the value of loyaltyUser to a GOLD_USER, SILVER_USER or BRONZE_USER, making sure to
// use what we learnt about Enums in the previous lesson. Make Sheia GOLD, Andrzej BRONZE 
// and Omar SILVER.
// 2. export the enum
// 3. Fix the function in the utils to show Sheias star as she is a GOLD_USER.
var reviewTotalDisplay = document.querySelector('#reviews');
var UserStats;
(function (UserStats) {
    UserStats[UserStats["GOLD_USER"] = 0] = "GOLD_USER";
    UserStats[UserStats["SILVER_USER"] = 1] = "SILVER_USER";
    UserStats[UserStats["BRONZE_USER"] = 2] = "BRONZE_USER";
})(UserStats || (UserStats = {}));
var reviews = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: UserStats[0],
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: UserStats[2],
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: UserStats[1],
        date: '27-03-2021'
    },
];
function displayReviews(reviews, reviewer, isLoyalty) {
    var icon = isLoyalty === "GOLD_USER" ? '⭐' : '';
    reviewTotalDisplay.textContent = "Total reviews: ".concat(reviews.toString(), " | last reviewed by: ").concat(reviewer, " ").concat(icon);
}
displayReviews(reviews.length, reviews[0].name, reviews[0].loyaltyUser);
var returningUserDisplay = document.querySelector('#returning-user');
var userNameDisplay = document.querySelector('#user');
var you = {
    userName: { firstName: 'Bobby', lastName: 'Brown' },
    isReturning: 'yes',
};
function populateUser(isReturning, userName) {
    if (isReturning) {
        returningUserDisplay.innerHTML = 'back';
    }
    userNameDisplay.innerHTML = userName['firstName'];
}
populateUser(Boolean(you.isReturning), you.userName);
var propertyContainer = document.querySelector('.properties');
//Array of Properties 
var properties = [
    {
        image: '../images/colombia-property.jpg',
        title: 'Colombian Shack',
        price: 45,
        location: {
            firstLine: 'shack 37',
            city: 'Bogota',
            code: 45632,
            country: 'Colombia'
        },
        contact: [+11234950824856, 'marywinkle@gmail.com'],
        isAvailable: true
    },
    {
        image: '../images/poland-property.jpg',
        title: 'Polish Cottage',
        price: 34,
        location: {
            firstLine: 'no 23',
            city: 'Gdansk',
            code: 343903,
            country: 'Poland'
        },
        contact: [+11234523524856, 'garydavis@hotmail.com'],
        isAvailable: false
    },
    {
        image: '../images/london-property.jpg',
        title: 'London Flat',
        price: 23,
        location: {
            firstLine: 'flat 15',
            city: 'London',
            code: 35433,
            country: 'United Kingdom',
        },
        contact: [+1125632124856, 'andyluger@aol.com'],
        isAvailable: true
    }
];
//Add the properties
for (var i = 0; i < properties.length; i++) {
    var card = document.createElement('div');
    card.classList.add('card');
    var title = document.createElement("h2");
    title.textContent = properties[i].title;
    card.appendChild(title);
    var image = document.createElement('img');
    image.setAttribute('src', properties[i].image);
    card.appendChild(image);
    propertyContainer.appendChild(card);
}
var currentLocation = ["Humenne", "4:52 AM", 3];
var footer = document.querySelector('.footer');
footer.innerHTML = "<h2>".concat(currentLocation[0], " - ").concat(currentLocation[1], " - ").concat(currentLocation[2], " \u00B0C</h2>");
