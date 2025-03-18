interface Describe {
  summary(): string
}

const book1 = {
  name: "The subtle art of not giving value",
  price: 200,
  purchaseable: true,
  summary(): string {
    return `Name of the book is ${this.name} which is $${this.price} and is purchaseable ${this.purchaseable}`
  }
}
const book2 = {
  name: "First Love",
  price: 300,
  purchaseable: false,
  summary(): string {
    return `Name of the book is ${this.name} which is $${this.price} and is purchaseable ${this.purchaseable}`
  }
}

const printedBooks = (books: Describe): void => {
  console.log(books.summary())
}

printedBooks(book1)
printedBooks(book2)