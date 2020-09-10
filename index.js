"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let basket1 = [
    { item: "Book", amount: 1, cost: 1249, imported: false, taxException: true },
    { item: "Book", amount: 1, cost: 1249, imported: false, taxException: true },
    {
        item: "Music CD",
        amount: 1,
        cost: 1499,
        imported: false,
        taxException: false,
    },
    {
        item: "Chocolate bar",
        amount: 1,
        cost: 85,
        imported: false,
        taxException: true,
    },
];
let basket2 = [
    {
        item: "Imported box of chocolates",
        amount: 1,
        cost: 1000,
        imported: true,
        taxException: true,
    },
    {
        item: "Imported bottle of perfume",
        amount: 1,
        cost: 4750,
        imported: true,
        taxException: false,
    },
];
let basket3 = [
    {
        item: "Imported bottle of perfume",
        amount: 1,
        cost: 2799,
        imported: true,
        taxException: false,
    },
    {
        item: "Bottle of perfume",
        amount: 1,
        cost: 1899,
        imported: false,
        taxException: false,
    },
    {
        item: "Packet of headache pills",
        amount: 1,
        cost: 975,
        imported: false,
        taxException: true,
    },
    {
        item: "Imported box of chocolates",
        amount: 1,
        cost: 1125,
        imported: true,
        taxException: true,
    },
    {
        item: "Imported box of chocolates",
        amount: 1,
        cost: 1125,
        imported: true,
        taxException: true,
    },
];
function convertToDollars(num) {
    return (num / 100).toFixed(2);
}
function roundToNearest5(num) {
    return Math.ceil(num / 5) * 5;
}
function shoppingBasketReceipts(input) {
    let totalCost = 0;
    let totalTaxCost = 0;
    let taxedAmount;
    let items = {};
    for (let i = 0; i < input.length; i++) {
        let obj = input[i];
        // getting total count per item
        if (!items[obj.item]) {
            const item = Object.assign({}, obj);
            items[obj.item] = obj;
        }
        else {
            items[obj.item].amount++;
        }
        //applying sales or import tax
        let roundedTax = 0;
        if (obj.imported === false && obj.taxException === false) {
            roundedTax = roundToNearest5(obj.cost * 0.1);
        }
        else if (obj.imported === true && obj.taxException === true) {
            roundedTax = roundToNearest5(obj.cost * 0.05);
        }
        else if (obj.imported === true && obj.taxException === false) {
            roundedTax =
                roundToNearest5(obj.cost * 0.05) + roundToNearest5(obj.cost * 0.1);
        }
        if (!(obj.imported === false && obj.taxException === true)) {
            totalTaxCost += roundedTax;
            items[obj.item].cost = roundedTax + obj.cost;
        }
        totalCost += items[obj.item].cost;
    }
    //creating receipt output
    let receipt = {};
    for (let item in items) {
        let supply = items[item];
        if (supply.amount !== 1) {
            receipt[item] = `${convertToDollars(supply.cost * supply.amount)} (${supply.amount} @ ${convertToDollars(supply.cost)})`;
        }
        else if (supply.amount === 1) {
            receipt[item] = convertToDollars(supply.cost);
        }
    }
    receipt["Sales Taxes"] = convertToDollars(totalTaxCost);
    receipt["Total"] = convertToDollars(totalCost);
    return receipt;
}
shoppingBasketReceipts(basket1);
