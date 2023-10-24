/**
 * Class to represent radius 
 * @class
 */

class Circle {
    private _radius: number;
  

    /**
     * creates a new Circle instance
     * @param radius 
     */
    constructor(radius: number) {
      this._radius = radius;
    }
  
    // Getter for retrieving the radius
    get radius(): number {
      return this._radius;
    }
  
    // Setter for setting the radius with validation
    set radius(newRadius: number) {
      if (newRadius >= 0) {
        this._radius = newRadius;
      } else {
        console.log("Invalid radius. Please provide a non-negative value.");
      }
    }
  
    // Getter for calculating the area of the circle
    get area(): number {
      return Math.PI * this._radius * this._radius;
    }
  }

  
  // Create a Circle instance
const myCircle = new Circle(5);

// Get the radius using the getter
console.log(`Radius: ${myCircle.radius}`); // Output: Radius: 5

// Set the radius using the setter
myCircle.radius = 7; // Valid input
console.log(`New Radius: ${myCircle.radius}`); // Output: New Radius: 7

// Attempt to set an invalid radius using the setter
myCircle.radius = -1; // Invalid input, error message is displayed

// Get the area of the circle using the getter
console.log(`Area: ${myCircle.area.toFixed(2)}`); // Output: Area: 153.94