/**
 * Represents a product info collections
 * @class
 */
var Product = /** @class */ (function () {
    /**
     * Creates a new Product instance
     * @param {string} name - name of the product
     * @param {string} description - description of the product
     * @param {number} price - price of the product
     * @param {boolean} inStock
     */
    function Product(info) {
        this.info = info;
    }
    Product.prototype.isAvailable = function () {
        this.info.inStock = !this.info.inStock;
    };
    return Product;
}());
//new instance
var LenovoT10 = {
    name: "Lenovo T10",
    description: "A new hyper tablet from Lenovo",
    price: 399,
    inStock: true,
};
var lenovo = new Product(LenovoT10);
//access the instance for inStock
console.log(lenovo.info.inStock);
lenovo.isAvailable();
console.log(lenovo.info.inStock);
