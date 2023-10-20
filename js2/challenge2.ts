

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

// Add the properties to the Dashboard
// This is a continuation of the Challenge, in which you are asked to add
// the 3 properties image and title to the dashboard based on the 
// properties array


const propertyContainer = document.querySelector('.properties')


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
    contact: string;
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
        contact: 'marywinkle@gmail.com',
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
        contact: 'garydavis@hotmail.com',
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
        contact: 'andyluger@aol.com',
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