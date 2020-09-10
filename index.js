"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let basket1 = [
    { item: "book", amount: 1, cost: 12.49, imported: false },
    { item: "book", amount: 1, cost: 12.49, imported: false },
    { item: "music CD", amount: 1, cost: 14.99, imported: false },
    { item: "chocolate bar", amount: 1, cost: 0.85, imported: false },
];
let basket2 = [
    { item: "imported box of chocolates", amount: 1, cost: 10.0, imported: true },
    { item: "imported bottle of perfume", amount: 1, cost: 47.5, imported: true },
];
let basket3 = [
    {
        item: "imported bottle of perfume",
        amount: 1,
        cost: 27.99,
        imported: true,
    },
    { item: "bottle of perfume", amount: 1, cost: 18.99, imported: false },
    { item: "packet of headache pills", amount: 1, cost: 9.75, imported: false },
    {
        item: "imported box of chocolates",
        amount: 1,
        cost: 11.25,
        imported: true,
    },
    {
        item: "imported box of chocolates",
        amount: 1,
        cost: 11.25,
        imported: true,
    },
];
function shoppingBasketReceipts(input) {
    for (let item of input) {
        console.log(item);
    }
}
shoppingBasketReceipts(basket1);
