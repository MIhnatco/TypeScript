/*
Interfaces are used to define a blueprint for classes, specifying the properties
and  methods that a class must implement.
*/
/**
 *Implement a Rectangel class that adheres to the IShape interface
 *@class
 */
var Rectangle = /** @class */ (function () {
    /**
     * Creates a new Rectangle instance.
     * @param {number} width - The initial width of the shape.
     * @param {number} height - The initial height of the shape.
     */
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    /**
    * Calculates the area of the rectangle.
    * @returns {number} The area of the rectangle.
    */
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    /**
    * Calculates the perimeter of the rectangle.
    * @returns {number} The perimeter of the rectangle.
    */
    Rectangle.prototype.getPerimeter = function () {
        return 2 * (this.width + this.height);
    };
    return Rectangle;
}());
/**
 *
 * Implement a Circle class that adheres to the IShape interface
 * @class
 */
var Circle = /** @class */ (function () {
    /**
     * Creates a new Circle instance.
     * @param {number} radius - The initial radius of the shape.
     *
     */
    function Circle(radius) {
        this.radius = radius;
    }
    /**
     * Calculates the area of the circle.
     * @returns {number} The area of the circle.
     */
    Circle.prototype.getArea = function () {
        return Math.PI * this.radius * this.radius;
    };
    /**
     * Calculates the perimeter of the circle.
     * @returns {number} The perimeter of the cirlce.
     */
    Circle.prototype.getPerimeter = function () {
        return 2 * Math.PI * this.radius;
    };
    return Circle;
}());
//Create instances of Rectangle and Circle
var rect = new Rectangle(4, 5);
var circle = new Circle(3);
// Use the getArea and getPerimeter methods
console.log("Rectangle Area: ".concat(rect.getArea()));
console.log("Rectangle Perimeter: ".concat(rect.getPerimeter()));
console.log("Circle Area: ".concat(circle.getArea()));
console.log("Circle Perimeter: ".concat(circle.getPerimeter()));
