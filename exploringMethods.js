// Step 1: Book Constructor Function
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
  
  // Step 2: Display Book Information Method
  Book.prototype.displayInfo = function() {
    return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`;
  };
  
  // Step 3: Library Array and Functions
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
  
  // Step 4: Filter and Map Methods
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
  
  // Example usage:
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
  