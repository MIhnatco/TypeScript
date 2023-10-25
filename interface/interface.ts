/**
 * Represents an object that calculates an area.
 * @interface
 */
interface Area {
     /**
     * Calculates and returns the area.
     * @function
     * @returns {number} The calculated area.
     */
    area(): number;
}

/**
 * Represents an object that calculates an perimeter.
 * @interface
 */
interface Perimeter {
     /**
     * Calculates and returns the perimeter.
     * @function
     * @returns {number} The calculated perimeter.
     */
    perimeter(): number;
}


/**
 *Implements a Rectangel class that adheres to the IShape interface
 *@class 
 */

 class Rectangle2 implements Area, Perimeter {
    
    /**
     * The width and height of the shape.
     * @type {number} width
     * @type {number} height
     */
    length: number = 3;
    width: number = 2;


    /**
     * Calculates the area of the rectangle.
     * @returns {number} The area of the rectangle.
     */
    area(): number {
        return this.length * this. width;
    }

    /**
     * Calculates the perimeter of the rectangle.
     * @returns {number} The perimeter of the rectangle.
     */
    perimeter(): number {
        return 2 * (this.length + this. width);
    }
 }



 type AreaAndPerimeter = Area & Perimeter;

 /**
  * Implements Circle1 class that adheres to a combined Interface AreAndPerimeter
  * @class
  */
 class Circle1 implements AreaAndPerimeter {
    /**
     * The radius of the shape
     * @type {number}
     */
        radius: number = 4;

        /**
         * Calculates the area of the shape
         * @returns {number} - The area of the circle
         */
        area(): number{
            return Math.PI * this.radius**2;
        }

        /**
         * Calculates the perimeter of the shape
         * @returns {number} - The perimeter of the circle
         */
        perimeter(): number {
            return 2 *  Math.PI * this.radius;
        }


 }

 const rect2 = new Rectangle2();
 const circ = new Circle1();

 const objectsWithArea: Area[] = [rect2, circ];

 for (let i = 0; i < objectsWithArea.length; i++){
    console.log(objectsWithArea[i].area())
 }



 /* Interface Properties */

 /**
 * Represents an object that contains 'name' string
 * @interface
 */

 interface CustomerInfo {
        /**
         * @type {string}
         */
    name: string;
 }


/**
  * Implements Customer class that adheres to a combined Interface CustomerInfo
  * @class
  */

class Customer implements CustomerInfo {
     /**
     * @type {string}
     */
    name: string;

    /**
    * Creates a new Customer instance
    */
    constructor(name:string){
        this.name = name;
    }
}


 /**
 * Represents an object 
 * @interface
 */

 interface Address {
    /**
     * @type street {string}
     * @type city {string}
     */
        street: string;
        city: string;
}

function printAddr(address: Address){
    console.log(`Street name: ${address.street}, City: ${address.city}`)
}

const addr = {
    street: 'name', 
    city: "sample"
}

printAddr(addr)
