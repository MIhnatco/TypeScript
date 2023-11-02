

/**
 * @interface
 */

interface WeatherData {
    location: string;
    temperature?: number;
    description?: string;
    wind?: {
        speed?: number;
    }
}

/**
 * Displays information about weather 
 * @param {object} WeatherData
 */

function getWeatherInfo(data: WeatherData): void {
    console.log(`Location: ${data.location}`)
    
    if(data?.temperature){
        console.log(`Temperature: ${data.temperature}`)
    }
    if(data?.description){
        console.log(`Description: ${data.description}`)
    }

    if(data?.wind?.speed){
        console.log(`Wind speed: ${data.wind.speed}`)
    }
}


/**
 * Represents complete data feed
 * @typedef {Object} 
 * @property {string} location 
 * @property {number} temperature
 * @property {string} description
 * @property {object} wind
 */

const completeData = {
    location: 'New York',
    temperature: 22,
    description: 'Partly cloudy',
    wind: {
        speed: 15,
    },
}

/**
 * Represents incomplete data feed
 * @typedef {Object} 
 * @property {string} location 
 * @property {number} temperature
 * @property {string} description
 * @property {object} wind
 */

const incompleteData: WeatherData = {
    location: 'Los Angeles',
    temperature: null,
    wind: {},
};


//call the function with data
getWeatherInfo(completeData)
getWeatherInfo(incompleteData)
