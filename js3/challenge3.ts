
const reviewTotalDisplay = document.querySelector('#reviews') as HTMLInputElement;
let isLoggedIn: boolean;

enum UserStats {
    GOLD_USER, 
    SILVER_USER, 
    BRONZE_USER
}


interface Review {
    name: string;
    stars: number;
    loyaltyUser: string;
    date: string;
}

const reviews: Review[] = [
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

function makeMultiple(value: number):string {
    if (value > 1 || value === 0 ) {
        return 's'
    } else return ''
};



function displayReviews(reviews: number, reviewer: string, isLoyalty: string): void {
    const icon = isLoyalty === "GOLD_USER" ? '⭐' : '';

    reviewTotalDisplay.textContent = `Total reviews: ${reviews} Review'${makeMultiple(reviews)}  | last reviewed by: ${reviewer} ${icon}` 

};

displayReviews(reviews.length, reviews[0].name, reviews[0].loyaltyUser);




const returningUserDisplay = document.querySelector('#returning-user');
const userNameDisplay = document.querySelector('#user');

enum Permissions {
    ADMIN = 'ADMIN', 
    READ_ONLY = 'READ_ONLY'
}


const you = {
    firstName: 'Bobby',
    lastName: 'Brown',
    permissions: Permissions[0],
    isReturning: true,
    age: 35,
    stayedAt: ['florida-home', 'oman-flat', 'tokyo-bungalow']
}


function populateUser(isReturning: boolean, userName: object ) {
    if (isReturning){
        returningUserDisplay.innerHTML = 'back'
    }
    userNameDisplay.innerHTML = userName['firstName']
}

populateUser(Boolean(you.isReturning), you)


const propertyContainer = document.querySelector('.properties')

interface Property {
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
const properties : Property[] =  [
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
    },

    {
        image: 'images/malaysian-hotel.jpeg',
        title: 'Malia Hotel',
        price: 35,
        location: {
            firstLine: 'Room 4',
            city: 'Malia',
            code: 45334,
            country: 'Malaysia'
        },
        contact: [ +60349822083, 'lee34@gmail.com'],
        isAvailable: false
    }
]

let authorityStatus: any;
isLoggedIn = true;

function showDetails(authorityStatus: boolean | Permissions, element: HTMLDivElement, price: number){
    if(authorityStatus){
        const priceDisplay = document.createElement('div');
        priceDisplay.innerHTML = price.toString() + '/night';
        element.appendChild(priceDisplay)
    }

}


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
    showDetails(true, card, properties[i].price)
}



// Button functionality
const button = document.querySelector('button')


function getTopTwoReviews(reviews : Review[]) : Review[]  {
    const sortedReviews = reviews.sort((a, b) => b.stars - a.stars)
    return sortedReviews.slice(0,2)
   }

const reviewContainer = document.querySelector('.reviews')
const container = document.querySelector('.container')
let count = 0

function addReviews(array : Review[]) : void {
    if (!count ) {
        count++
        const topTwo = getTopTwoReviews(array)
        for (let i = 0; i < topTwo.length; i++) {
            const card = document.createElement('div')
            card.classList.add('review-card')
            card.innerHTML = topTwo[i].stars + ' stars from ' + topTwo[i].name
            reviewContainer.appendChild(card)
        }
        container.removeChild(button) 
    }
}


button.addEventListener('click', () => addReviews(reviews))



//Footer

let currentLocation : [string, string, number] = ["Humenne", "4:52 AM", 3];

const footer = document.querySelector('.footer')
footer.innerHTML = `<h2>${currentLocation[0]} - ${currentLocation[1]} - ${currentLocation[2]} °C</h2>`