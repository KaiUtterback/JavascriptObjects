```markdown
# JavaScript Projects

## Objective
The aim of these projects is to deepen understanding and proficiency in manipulating JavaScript objects, using constructor functions, working with
prototypes, and utilizing the Math class for mathematical operations.

## Projects Overview

### 1. Digital Library System

#### Concepts Covered
- **JavaScript Objects**: Creating and manipulating objects using constructor functions and prototypes.
- **Array Methods**: Using `filter` and `map` methods to manipulate arrays of objects.

#### Features
- **Create Books**: Initialize new book objects with title, author, and pages.
- **Display Book Information**: Method to display the information of each book.
- **Add and Search Books**: Functions to add new books and search for books by title or author.
- **Filter and Modify Books**: Functions to filter books with more than 100 pages and modify book properties.

#### Implementation

##### Step 1: Book Constructor Function
Define a constructor function for the `Book` object.
```javascript
function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}
```

##### Step 2: Display Book Information Method
Add a method to the `Book` prototype.
```javascript
Book.prototype.displayInfo = function() {
  return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`;
};
```

##### Step 3: Library Array and Functions
Create an array to store book objects and implement functions to add and search books.
```javascript
let library = [];

function addBook(book) {
  library.push(book);
}

function searchByTitle(title) {
  return library.filter(book => book.title.toLowerCase() === title.toLowerCase());
}

function searchByAuthor(author) {
  return library.filter(book => book.author.toLowerCase() === author.toLowerCase());
}
```

##### Step 4: Filter and Map Methods
Create functions to filter and modify books.
```javascript
function filterBooksByPages(pageLimit) {
  return library.filter(book => book.pages > pageLimit);
}

function modifyBookProperties() {
  return library.map(book => {
    return {
      title: "Title: " + book.title,
      author: "Author: " + book.author,
      pages: book.pages
    };
  });
}
```

##### Example Usage
```javascript
let book1 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 180);
let book2 = new Book('To Kill a Mockingbird', 'Harper Lee', 281);
let book3 = new Book('1984', 'George Orwell', 328);
let book4 = new Book('Green Eggs and Ham', 'Dr. Seuss', 62);

addBook(book1);
addBook(book2);
addBook(book3);
addBook(book4);

console.log(book1.displayInfo());
console.log(searchByTitle('1984'));
console.log(searchByAuthor('Harper Lee'));
console.log(filterBooksByPages(100));
console.log(modifyBookProperties());
```

#### Expected Outcomes
- **Creating objects** using constructor functions in JavaScript.
- **Adding properties and methods** to objects using prototypes.
- **Manipulating arrays of objects** and implementing functions to perform various operations on object data.

### 2. Simple Banking Application

#### Concepts Covered
- **JavaScript Objects**: Creating and manipulating objects using constructor functions and prototypes.
- **Math Class**: Performing mathematical operations using the Math class.

#### Features
- **Create Accounts**: Initialize new accounts with account number, balance, and owner.
- **Deposit Funds**: Add money to the account balance.
- **Withdraw Funds**: Deduct money from the account balance with validation for sufficient funds.
- **Calculate Interest**: Compute compound interest on the account balance over a specified period at a given rate.

#### Implementation

##### Step 1: Account Constructor Function
Define a constructor function for the `Account` object.
```javascript
function Account(accountNumber, balance, owner) {
  this.accountNumber = accountNumber;
  this.balance = balance;
  this.owner = owner;
}
```

##### Step 2: Deposit and Withdraw Methods
Add methods to the `Account` prototype to handle deposits and withdrawals.
```javascript
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
```

##### Step 3: Calculate Compound Interest Method
Add a method to the `Account` prototype to calculate compound interest.
```javascript
Account.prototype.calculateInterest = function(rate, time) {
  let compoundInterest = this.balance * Math.pow((1 + rate / 100), time);
  return `Compound interest for ${time} years at rate ${rate}% is ${compoundInterest.toFixed(2)}.`;
};
```

##### Example Usage
```javascript
let account1 = new Account(123456, 1000, 'Alice');
let account2 = new Account(654321, 5000, 'Bob');

console.log(account1.deposit(500)); // Deposited 500. New balance is 1500.
console.log(account1.withdraw(200)); // Withdrew 200. New balance is 1300.
console.log(account1.calculateInterest(5, 2)); // Compound interest for 2 years at rate 5% is 1430.25.

console.log(account2.deposit(1000)); // Deposited 1000. New balance is 6000.
console.log(account2.withdraw(7000)); // Insufficient funds.
console.log(account2.calculateInterest(3, 1)); // Compound interest for 1 years at rate 3% is 6180.00.
```

#### Expected Outcomes
- **Creating objects** using constructor functions and manipulating their properties and methods in JavaScript.
- **Performing mathematical operations** and calculations using the Math class.
- **Applying object-oriented principles** and mathematical concepts to solve real-world problems, such as financial calculations in a banking application.

## Conclusion
These projects demonstrate the use of JavaScript objects and the Math class to build functional applications. By completing these projects, students will gain practical experience in object-oriented programming and mathematical computations in JavaScript.
```
