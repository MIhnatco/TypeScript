

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


function displayReviews(reviews: number, reviewer: string, isLoyalty: boolean): void {
    const icon = isLoyalty ? '⭐' : '';

    reviewTotalDisplay.textContent = `Total reviews: ${reviews.toString()} | last reviewed by: ${reviewer} ${icon}` 

}

displayReviews(reviews.length, reviews[0].name, reviews[0].loyaltyUser)




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


const propertyContainer = document.querySelector('.properties')

// Tuple Types
// 1. Replace the contact values to take an array that contains a
// phone number and email.
// 2. Check the inferred Type that appears in the Object Type.
// 3. Overwrite the inferred type to be a Tuple.

// Tuples challenge
// 1. Add an array to the variable of currentLocation I have added. This array
// must have your current location, time, and degrees celsius of your location
// NOTE: make sure to make this a Tuple, to only allow those types in that
// structure.
// 2. Add this visually to a footer on your site



type Props = {
    image: string;
    title: string;
    price: number;
    location: {
        firstLine: string;
        city: string;
        code: number;
        country: string;
    };
    contact: [number, string];
    isAvailable: boolean;

}
//Array of Properties 
const properties : Props[] =  [
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
        contact: [+11234950824856,'marywinkle@gmail.com'],
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
        contact: [+11234523524856,'garydavis@hotmail.com'],
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
        contact: [+1125632124856,'andyluger@aol.com'],
        isAvailable: true
    }
]


//Add the properties

for (let i = 0; i < properties.length; i++){
    const card = document.createElement('div')
    card.classList.add('card')

    const title = document.createElement("h2")
    title.textContent = properties[i].title;

    card.appendChild(title)

    const image = document.createElement('img');
    image.setAttribute('src', properties[i].image);
    card.appendChild(image);

    propertyContainer.appendChild(card)
}


let currentLocation : [string, string, number] = ["Humenne", "4:52 AM", 3];

const footer = document.querySelector('.footer')
footer.innerHTML = `<h2>${currentLocation[0]} - ${currentLocation[1]} - ${currentLocation[2]} °C</h2>`