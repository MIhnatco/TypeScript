

/*
Interfaces are used to define a blueprint for classes, specifying the properties 
and  methods that a class must implement.
*/


/**
 * Define an interface for a Shape class 
 */
interface IShape {
    
    getArea(): number;
    getPerimeter(): number;
}


/**
 *Implements a Rectangel class that adheres to the IShape interface
 *@class 
 */

class Rectangle implements IShape {

    /**
     * The width and height of the shape.
     * @type {number} width
     * @type {number} height
     */
    width: number;
    height: number;

    /**
     * Creates a new Rectangle instance.
     * @param {number} width - The initial width of the shape.
     * @param {number} height - The initial height of the shape.
     */
    
    constructor(width: number, height: number){
        this.width = width;
        this.height = height;

    }


     /**
     * Calculates the area of the rectangle.
     * @returns {number} The area of the rectangle.
     */
    getArea(): number {
        return this.width * this.height
    }

     /**
     * Calculates the perimeter of the rectangle.
     * @returns {number} The perimeter of the rectangle.
     */
    getPerimeter(): number {
        return 2 * (this.width + this.height);
    }
}


/**
 * 
 * Implement a Circle class that adheres to the IShape interface
 * @class
 */

class Circle implements IShape {
        /**
         * The radius of the shape.
         * @type {number}
         */
        radius: number;

        /**
         * Creates a new Circle instance.
         * @param {number} radius - The initial radius of the shape.
         * 
         */
        constructor(radius: number){
            this.radius = radius;
        }


        /**
         * Calculates the area of the circle.
         * @returns {number} The area of the circle.
         */
        getArea(): number {
            return Math.PI * this.radius * this.radius;
        }

        /**
         * Calculates the perimeter of the circle.
         * @returns {number} The perimeter of the cirlce.
         */
        getPerimeter(): number {
            return 2 * Math.PI * this.radius;
        }
}

//Create instances of Rectangle and Circle

 const rect = new Rectangle(4,5);
 const circle = new Circle(3);

 // Use the getArea and getPerimeter methods
console.log(`Rectangle Area: ${rect.getArea()}`);
console.log(`Rectangle Perimeter: ${rect.getPerimeter()}`);
console.log(`Circle Area: ${circle.getArea()}`);
console.log(`Circle Perimeter: ${circle.getPerimeter()}`);
