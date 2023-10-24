/**
 * Class to represent radius
 * @class
 */
var Circle = /** @class */ (function () {
    /**
     * creates a new Circle instance
     * @param radius
     */
    function Circle(radius) {
        this._radius = radius;
    }
    Object.defineProperty(Circle.prototype, "radius", {
        // Getter for retrieving the radius
        get: function () {
            return this._radius;
        },
        // Setter for setting the radius with validation
        set: function (newRadius) {
            if (newRadius >= 0) {
                this._radius = newRadius;
            }
            else {
                console.log("Invalid radius. Please provide a non-negative value.");
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Circle.prototype, "area", {
        // Getter for calculating the area of the circle
        get: function () {
            return Math.PI * this._radius * this._radius;
        },
        enumerable: false,
        configurable: true
    });
    return Circle;
}());
// Create a Circle instance
var myCircle = new Circle(5);
// Get the radius using the getter
console.log("Radius: ".concat(myCircle.radius)); // Output: Radius: 5
// Set the radius using the setter
myCircle.radius = 7; // Valid input
console.log("New Radius: ".concat(myCircle.radius)); // Output: New Radius: 7
// Attempt to set an invalid radius using the setter
myCircle.radius = -1; // Invalid input, error message is displayed
// Get the area of the circle using the getter
console.log("Area: ".concat(myCircle.area.toFixed(2))); // Output: Area: 153.94
