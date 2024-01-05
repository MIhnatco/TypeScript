/**
 * @interface
 */
/**
 * Represents a User with name, email, address
 * @class
 */
var UserRecord = /** @class */ (function () {
    /**
     * initializes a new User instance
     * @param {string} name - Name of the user
     * @param {string} email - Email of the user
     * @param {object} address - Address of the user
     */
    function UserRecord(name, email, address) {
        this.name = name;
        this.email = email;
        this.address = address;
    }
    UserRecord.prototype.getAddress = function () {
        var _a, _b, _c;
        if (this.address === undefined) {
            return "Address not available";
        }
        return "".concat((_a = this.address) === null || _a === void 0 ? void 0 : _a.street, ", ").concat((_b = this.address) === null || _b === void 0 ? void 0 : _b.city, ", ").concat((_c = this.address) === null || _c === void 0 ? void 0 : _c.zipCode, " ");
    };
    return UserRecord;
}());
var user1 = new UserRecord("John Doe", "john@example.com", {
    street: "123 Main St",
    city: "New York",
    zipCode: "10001",
});
console.log(user1.getAddress()); // Output: 123 Main St, New York, 10001
var user2 = new UserRecord("Jane Smith", "jane@example.com");
console.log(user2.getAddress()); // Output: Address not available
