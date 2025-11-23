class Book {
  constructor(title, author, isbn, isIssued = false) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.isIssued = isIssued;
  }

  issueBook() {
    if (this.isIssued) {
      return `Book "${this.title}" is already issued.`;
    }
    this.isIssued = true;
    return `Book "${this.title}" has been issued.`;
  }

  returnBook() {
    if (!this.isIssued) {
      return `Book "${this.title}" was not issued.`;
    }
    this.isIssued = false;
    return `Book "${this.title}" has been returned.`;
  }

  displayDetails() {
    return `${this.title} by ${this.author} (ISBN: ${this.isbn}) - Status: ${this.isIssued ? "Issued" : "Available"}`;
  }
}

// Create books
const books = [
  new Book("Harry Potter", "J.K. Rowling", "ISBN001"),
  new Book("1984", "George Orwell", "ISBN002", true),
  new Book("To Kill a Mockingbird", "Harper Lee", "ISBN003"),
  new Book("The Great Gatsby", "F. Scott Fitzgerald", "ISBN004", true),
  new Book("Pride and Prejudice", "Jane Austen", "ISBN005"),
];

// Display all available books
console.log("=== Available Books ===");
books.filter(b => !b.isIssued).forEach(b => console.log(b.displayDetails()));

// Issue a book by ISBN
function issueBookByISBN(isbn) {
  const book = books.find(b => b.isbn === isbn);
  if (book) {
    console.log(book.issueBook());
  } else {
    console.log("Book not found.");
  }
}

// Return a book by ISBN
function returnBookByISBN(isbn) {
  const book = books.find(b => b.isbn === isbn);
  if (book) {
    console.log(book.returnBook());
  } else {
    console.log("Book not found.");
  }
}

// Example usage
console.log("\n=== Issue Book ===");
issueBookByISBN("ISBN003");

console.log("\n=== Return Book ===");
returnBookByISBN("ISBN002");

console.log("\n=== Updated Available Books ===");
books.filter(b => !b.isIssued).forEach(b => console.log(b.displayDetails()));
