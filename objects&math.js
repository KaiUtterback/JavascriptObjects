// Step 1: Account Constructor Function
function Account(accountNumber, balance, owner) {
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.owner = owner;
  }
  
  // Step 2: Deposit and Withdraw Methods
  Account.prototype.deposit = function(amount) {
    if (amount > 0) {
      this.balance += amount;
      return `Deposited ${amount}. New balance is ${this.balance}.`;
    } else {
      return 'Deposit amount must be positive.';
    }
  };
  
  Account.prototype.withdraw = function(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      return `Withdrew ${amount}. New balance is ${this.balance}.`;
    } else if (amount > this.balance) {
      return 'Insufficient funds.';
    } else {
      return 'Withdrawal amount must be positive.';
    }
  };
  
  // Step 3: Calculate Compound Interest Method
  Account.prototype.calculateInterest = function(rate, time) {
    let compoundInterest = this.balance * Math.pow((1 + rate / 100), time);
    return `Compound interest for ${time} years at rate ${rate}% is ${compoundInterest.toFixed(2)}.`;
  };
  
  // Example usage:
  let account1 = new Account(123456, 1000, 'Alice');
  let account2 = new Account(654321, 5000, 'Bob');
  
  console.log(account1.deposit(500)); // Deposited 500. New balance is 1500.
  console.log(account1.withdraw(200)); // Withdrew 200. New balance is 1300.
  console.log(account1.calculateInterest(5, 2)); // Compound interest for 2 years at rate 5% is 1430.25.
  
  console.log(account2.deposit(1000)); // Deposited 1000. New balance is 6000.
  console.log(account2.withdraw(7000)); // Insufficient funds.
  console.log(account2.calculateInterest(3, 1)); // Compound interest for 1 years at rate 3% is 6180.00.
  