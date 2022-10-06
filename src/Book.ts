export class Book{
    #name : string;
    #rating : number;

    constructor(name: string, rating: number) {
        this.#name = name;
        this.#rating = rating;
    }

    toString() : void {
        console.log(this.#name, this.#rating);
    }
}