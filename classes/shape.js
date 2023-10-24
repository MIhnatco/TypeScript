/**
 * Class to represents geometric shape
 * @class
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shape = /** @class */ (function () {
    /**
     * Creates a new Shape instance
     */
    function Shape(newRadius) {
        this.radius = newRadius;
    }
    return Shape;
}());
/**
 * Represents a rectangle, a specific type of geometric shape.
 * @class extends Shape
 */
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    /**
     *
     * Creates a new Rectangle instance with the specified dimensions
     * @param {number} newLength  - The length of the rectangle
     * @param {number} newWidth  - The width of the rectangle
     */
    function Rectangle(newLength, newWidth) {
        var _this = _super.call(this, 0) //Radius is not applicable to the rectangle
         || this;
        _this.length = newLength;
        _this.width = newWidth;
        return _this;
    }
    /**
     *
     * Calculates the area of the rectangle
     * @returns  {number} - The area of the rectangle
     *
     */
    Rectangle.prototype.area = function () {
        return "Area of a rectangle with [length: ".concat(this.length, ", width: ").concat(this.width, "] is: ").concat(this.length * this.width);
    };
    /**
     * Calculates the perimeter of the rectangle.
     * @returns {number} - The perimeter of the rectangle.
     */
    Rectangle.prototype.perimeter = function () {
        return "Perimeter of a rectangle with [length: ".concat(this.length, ", width: ").concat(this.width, "] is: ").concat(2 * this.length + 2 * this.width);
    };
    return Rectangle;
}(Shape));
var rect1 = new Rectangle(5, 3);
console.log(rect1.area());
console.log(rect1.perimeter());
/**
* Represents a circle, a specific type of geometric shape.
* @class extends Shape
*/
var Circle2 = /** @class */ (function (_super) {
    __extends(Circle2, _super);
    /**
     * Creates a new Circle2 instance with the specified radius
     * @param {number} newRadius - The radius of the circle.
     */
    function Circle2(newRadius) {
        return _super.call(this, newRadius) || this;
    }
    /**
     * Calculates the area of the circle.
     * @returns {number} - The area of the circle
     */
    Circle2.prototype.area = function () {
        return Math.PI * this.radius * this.radius;
    };
    /**
     * Calculate the circumference of the circle
     * @return {number} - The circumference of the circle.
     */
    Circle2.prototype.circumference = function () {
        return (2 * Math.PI * this.radius).toFixed(2);
    };
    return Circle2;
}(Shape));
//Instance of Circle2
var circ = new Circle2(4);
// Calculate and display the area of the circle
console.log("Circle Area: ".concat(circ.area()));
// Calculate and display the circumference of the circle
console.log("Circle Circumference: ".concat(circ.circumference()));
