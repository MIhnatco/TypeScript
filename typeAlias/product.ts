//type alias for product's information
type ProductDetails = {
  name: string;
  description: string;
  price: number;
  inStock: true;
};

/**
 * Represents a product info collections
 * @class
 */

class Product {
  //type alias to define properties
  info: ProductDetails;

  /**
   * Creates a new Product instance
   * @param {string} name - name of the product
   * @param {string} description - description of the product
   * @param {number} price - price of the product
   * @param {boolean} inStock
   */

  constructor(info: ProductDetails) {
    this.info = info;
  }

  isAvailable() {
    this.info.inStock = !this.info.inStock;
  }
}

//new instance
let LenovoT10: ProductDetails = {
  name: "Lenovo T10",
  description: "A new hyper tablet from Lenovo",
  price: 399,
  inStock: true,
};

const lenovo = new Product(LenovoT10);

//access the instance for inStock
console.log(lenovo.info.inStock);

lenovo.isAvailable();
console.log(lenovo.info.inStock);
