// Number Types mini-challenge
// Write a function that will only accept numbers and attend to 
// all 'any' TypeScript weakness flags.


// String Types mini-challenge
// Improve our function that will display the most recent reviewers name next to the review total,
// making sure to assign a type to the parameter, to prevent unwanted behaviour.


// Boolean Types mini-challenge
// if the last reviewer is a loyalty User, can you add a star to the end of their name?
// please do so in the existing function, and make sure to declare what type of 
// parameters the function takes.
// : boolean

// Array Types mini-challenge
//Can you assign the correct Type to the reviews const? Please bear in mind everything
// we have learnt about String, Boolean, Number, Object and Array Types for this.

const reviewTotalDisplay = document.querySelector('#reviews') as HTMLInputElement;


const reviews: {
    name: string;
    stars: number;
    loyaltyUser: boolean;
    date: string;
}[] = [
    {
        name: 'Sheia',
        stars: 5,
        loyaltyUser: true,
        date: '01-04-2021'
    },
    {
        name: 'Andrzej',
        stars: 3,
        loyaltyUser: false,
        date: '28-03-2021'
    },
    {
        name: 'Omar',
        stars: 4,
        loyaltyUser: true,
        date: '27-03-2021'
    },
]

//Write a function that will display total amount of reviews on our website

function displayReviews(reviews: number, reviewer: string, isLoyalty: boolean): void {
    const icon = isLoyalty ? '⭐' : '';

    reviewTotalDisplay.textContent = `Total reviews: ${reviews.toString()} | last reviewed by: ${reviewer} ${icon}` 

}

displayReviews(reviews.length, reviews[0].name, reviews[0].loyaltyUser)

// Fixing the Website

// Can you fix my code to show 'Welcome back Bobby' in the Nav Bar for 
// our couch surfing website? Do this by assigning types to the parameters
// we pass to our populateUser function, so that we can be aware of
// errors in our user objects in the future

const returningUserDisplay = document.querySelector('#returning-user')
const userNameDisplay = document.querySelector('#user')

type User = {
    userName: {
        firstName: string;
        lastName: string;
    };
    isReturning: string;
}

const you: User = {
    userName: {firstName: 'Bobby', lastName: 'Brown'},
    isReturning: 'yes',
}


function populateUser(isReturning: boolean, userName: object ) {
    if (isReturning){
        returningUserDisplay.innerHTML = 'back'
    }
    userNameDisplay.innerHTML = userName['firstName']
}

populateUser(Boolean(you.isReturning), you.userName)