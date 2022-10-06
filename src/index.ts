import { Book } from "./Book";

let books : Book[] = [];
books.push(new Book("Harry Potter és a Bölcsek Köve", 10));
books.push(new Book("A Gyűrűk Ura", 9));
books.push(new Book("A Pál Utcai Fiúk", 8));

function kiir(){
    console.log(books)
}

function nagyobb(){
    for(let i = 0; i < books.length; i++){
        if(books[i].rating > 7){
            console.log(books[i])
        }
    }
}

function init(){
    console.log(books)
}

function bestof(){
    let max = 0;
    let index = 0;
    for(let i = 0; i < books.length; i++){
        if(books[i].rating > max){
            max = books[i].rating
            index = i
        }
    }
        console.log("A legnagyobb értékeélsű könyv: " + books[index])
}

document.addEventListener('DOMContentLoaded', init)