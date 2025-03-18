var book1 = {
    name: "The subtle art of not giving value",
    price: 200,
    purchaseable: true,
    summary: function () {
        return "Name of the book is ".concat(this.name, " which is $").concat(this.price, " and is purchaseable ").concat(this.purchaseable);
    }
};
var book2 = {
    name: "First Love",
    price: 300,
    purchaseable: false,
    summary: function () {
        return "Name of the book is ".concat(this.name, " which is $").concat(this.price, " and is purchaseable ").concat(this.purchaseable);
    }
};
var printedBooks = function (books) {
    console.log(books.summary());
};
printedBooks(book1);
printedBooks(book2);
