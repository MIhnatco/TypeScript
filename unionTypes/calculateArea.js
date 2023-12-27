//Assignment:
//Create a function called calculateArea that accepts either a number representing the radius of a circle or an object
//representing the width and height of a rectangle.
//The function should return the area of the circle or rectangle accordingly.
function calculateArea(nmb) {
    if (typeof nmb === "number") {
        return Math.PI * Math.pow(nmb, 2);
    }
    else {
        return nmb.width * nmb.height;
    }
}
console.log(calculateArea(5));
console.log(calculateArea({ width: 5, height: 4 }));
