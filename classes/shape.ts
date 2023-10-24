/**
 * Class to represents geometric shape
 * @class
 */


class Shape {
    /**
     * The radius of the shape
     * @type {number}
     */
    radius: number;

    /**
     * Creates a new Shape instance
     */
    constructor(newRadius){
        this.radius = newRadius;

    }

}


/**
 * Represents a rectangle, a specific type of geometric shape.
 * @class extends Shape
 */
class Rectangle extends Shape {
    /**
     * The length of the rectangle
     * @type {number}
     * 
     * The width of the rectangle
     * @type {number}
     */
    length: number;
    width: number;

    /**
     * 
     * Creates a new Rectangle instance with the specified dimensions
     * @param {number} newLength  - The length of the rectangle
     * @param {number} newWidth  - The width of the rectangle
     */
    constructor(newLength: number, newWidth: number){
        super(0)  //Radius is not applicable to the rectangle

        this.length = newLength;
        this.width = newWidth;
    }

    /**
     * 
     * Calculates the area of the rectangle
     * @returns  {number} - The area of the rectangle
     * 
     */
    area(){
        return `Area of a rectangle with [length: ${this.length}, width: ${this.width}] is: ${this.length * this.width}` ;
    }

    /**
     * Calculates the perimeter of the rectangle.
     * @returns {number} - The perimeter of the rectangle.
     */
    perimeter() {
        return `Perimeter of a rectangle with [length: ${this.length}, width: ${this.width}] is: ${2 * this.length + 2 * this.width}`
    }
}

let rect1 = new Rectangle(5,3)
console.log(rect1.area())
console.log(rect1.perimeter())



 /**
 * Represents a circle, a specific type of geometric shape.
 * @class extends Shape
 */

 class Circle2 extends Shape {
        /**
         * Creates a new Circle2 instance with the specified radius
         * @param {number} newRadius - The radius of the circle.
         */

        constructor(newRadius: number){
            super(newRadius)
        }

        /**
         * Calculates the area of the circle.
         * @returns {number} - The area of the circle
         */
        area(){
            return (Math.PI * this.radius * this.radius).toFixed(2);
        }

        /**
         * Calculate the circumference of the circle
         * @return {number} - The circumference of the circle.
         */
        circumference(){
            return (2 * Math.PI * this.radius).toFixed(2);
        }
 }


 //Instance of Circle2

 const circ = new Circle2(4);

 // Calculate and display the area of the circle
console.log(`Circle Area: ${circ.area()}`);

// Calculate and display the circumference of the circle
console.log(`Circle Circumference: ${circ.circumference()}`);