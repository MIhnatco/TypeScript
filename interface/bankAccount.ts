/**
 * Defines the structure of a bank account object
 * @interface BankAccount
 */

interface BankAccount {
  /**
   * @type {number} accountNumber
   * @type {string} accountHoler
   * @type {number} balance
   */
  accountNumber: number;
  accountHolder: string;
  balance: number;

  //deposit function
  deposit(newValue: number): void;

  //withdraw function
  withdraw(amount: number): void;
}

/**
 * Implements SavingsAccount that adheres to a BankAccount interface
 * @class
 */

class SavingsAccount implements BankAccount {
  accountNumber: number;
  accountHolder: string;
  balance: number;

  /**
   * Creates a new SavingsAccount instance
   * @param {number} accountNumber -
   * @param {string} accountHolder -
   * @param {number} balance -
   */
  constructor(accountNumber: number, accountHolder: string, balance: number) {
    this.accountHolder = accountHolder;
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

  /**
   * Add a newDeposit to balance
   * @param {number} newDeposit
   */
  deposit(newDeposit: number): void {
    this.balance += newDeposit;
  }
  /**
   * Withdraw an amount from balance
   * @param {number} amount
   */
  withdraw(amount: number): void {
    if (amount <= this.balance){
      this.balance -= amount;
    } else {
      console.log("Insufficient funds")
    }
  }

  //Additional logic specific to savings account 
  calculateInterest(rate: number, timePeriod: number): void {
    const interest = (this.balance * rate * timePeriod) / 100;
    this.deposit(interest);

  }

}

class CheckingAccount implements BankAccount {
  accountNumber: number;
  accountHolder: string;
  balance: number;

  /**
   * Creates a new SavingsAccount instance
   * @param {number} accountNumber -
   * @param {string} accountHolder -
   * @param {number} balance -
   */
  constructor(accountNumber: number, accountHolder: string, balance: number) {
    this.accountHolder = accountHolder;
    this.accountNumber = accountNumber;
    this.balance = balance;
  }

    /**
   * Add a newDeposit to balance
   * @param {number} newDeposit
   */
    deposit(newDeposit: number): void {
      this.balance += newDeposit;
    }
    /**
     * Withdraw an amount from balance
     * @param {number} amount
     */
    withdraw(amount: number): void {
      if (amount <= this.balance){
        this.balance -= amount;
      } else {
        console.log("Insufficient funds")
      }
    }
  


}
