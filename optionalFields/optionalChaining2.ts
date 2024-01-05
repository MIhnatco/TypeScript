/**
 * @interface
 */

interface User {
  name: string;
  email: string;
  address?: {
    street?: string;
    city?: string;
    zipCode?: number;
  };

  getAddress?(): string;
}

/**
 * Represents a User with name, email, address
 * @class
 */

class UserRecord implements User {
  name: string;
  email: string;
  address: {
    street: string;
    city: string;
    zipCode: number;
  };

  /**
   * initializes a new User instance
   * @param {string} name - Name of the user
   * @param {string} email - Email of the user
   * @param {object} address - Address of the user
   */

  constructor(name: string, email: string, address?: any) {
    this.name = name;
    this.email = email;
    this.address = address;
  }

  getAddress() {
    if (this.address === undefined) {
      return "Address not available";
    }

    return `${this.address?.street}, ${this.address?.city}, ${this.address?.zipCode} `;
  }
}

const user1 = new UserRecord("John Doe", "john@example.com", {
  street: "123 Main St",
  city: "New York",
  zipCode: "10001",
});

console.log(user1.getAddress()); // Output: 123 Main St, New York, 10001

const user2 = new UserRecord("Jane Smith", "jane@example.com");

console.log(user2.getAddress()); // Output: Address not available
