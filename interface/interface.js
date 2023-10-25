/**
 *Implements a Rectangel class that adheres to the IShape interface
 *@class
 */
var Rectangle2 = /** @class */ (function () {
    function Rectangle2() {
        /**
         * The width and height of the shape.
         * @type {number} width
         * @type {number} height
         */
        this.length = 3;
        this.width = 2;
    }
    /**
     * Calculates the area of the rectangle.
     * @returns {number} The area of the rectangle.
     */
    Rectangle2.prototype.area = function () {
        return this.length * this.width;
    };
    /**
     * Calculates the perimeter of the rectangle.
     * @returns {number} The perimeter of the rectangle.
     */
    Rectangle2.prototype.perimeter = function () {
        return 2 * (this.length + this.width);
    };
    return Rectangle2;
}());
/**
 * Implements Circle1 class that adheres to a combined Interface AreAndPerimeter
 * @class
 */
var Circle1 = /** @class */ (function () {
    function Circle1() {
        /**
         * The radius of the shape
         * @type {number}
         */
        this.radius = 4;
    }
    /**
     * Calculates the area of the shape
     * @returns {number} - The area of the circle
     */
    Circle1.prototype.area = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    /**
     * Calculates the perimeter of the shape
     * @returns {number} - The perimeter of the circle
     */
    Circle1.prototype.perimeter = function () {
        return 2 * Math.PI * this.radius;
    };
    return Circle1;
}());
var rect2 = new Rectangle2();
var circ = new Circle1();
var objectsWithArea = [rect2, circ];
for (var i = 0; i < objectsWithArea.length; i++) {
    console.log(objectsWithArea[i].area());
}
/**
  * Implements Customer class that adheres to a combined Interface CustomerInfo
  * @class
  */
var Customer = /** @class */ (function () {
    /**
    * Creates a new Customer instance
    */
    function Customer(name) {
        this.name = name;
    }
    return Customer;
}());
function printAddr(address) {
    console.log("Street name: ".concat(address.street, ", City: ").concat(address.city));
}
var addr = {
    street: 'name',
    city: "sample"
};
printAddr(addr);
