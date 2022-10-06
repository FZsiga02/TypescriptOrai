"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Book_1 = require("./Book");
let books = [];
books.push(new Book_1.Book("Harry Potter és a Bölcsek Köve", 10));
books.push(new Book_1.Book("A Gyűrűk Ura", 9));
books.push(new Book_1.Book("A Pál Utcai Fiúk", 8));
function kiir() {
    console.log(books);
}
