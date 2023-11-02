/**
 * @interface
 */
/**
 * Displays information about weather
 * @param {object} WeatherData
 */
function getWeatherInfo(data) {
    var _a;
    console.log("Location: ".concat(data.location));
    if (data === null || data === void 0 ? void 0 : data.temperature) {
        console.log("Temperature: ".concat(data.temperature));
    }
    if (data === null || data === void 0 ? void 0 : data.description) {
        console.log("Description: ".concat(data.description));
    }
    if ((_a = data === null || data === void 0 ? void 0 : data.wind) === null || _a === void 0 ? void 0 : _a.speed) {
        console.log("Wind speed: ".concat(data.wind.speed));
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
var completeData = {
    location: 'New York',
    temperature: 22,
    description: 'Partly cloudy',
    wind: {
        speed: 15,
    },
};
/**
 * Represents incomplete data feed
 * @typedef {Object}
 * @property {string} location
 * @property {number} temperature
 * @property {string} description
 * @property {object} wind
 */
var incompleteData = {
    location: 'Los Angeles',
    temperature: null,
    wind: {},
};
//call the function with data
getWeatherInfo(completeData);
getWeatherInfo(incompleteData);
