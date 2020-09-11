import { expect } from "chai";
import "mocha";
import { shoppingBasketReceipts, IItemList } from "./main";

describe("shoppingBasketReceipts function", () => {
  it("should return basket one items with prices, amount, sale tax total, and total cost", () => {
    let basketOne: IItemList[] = [
      {
        item: "Book",
        amount: 1,
        cost: 1249,
        imported: false,
        taxException: true,
      },
      {
        item: "Book",
        amount: 1,
        cost: 1249,
        imported: false,
        taxException: true,
      },
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
    const result = shoppingBasketReceipts(basketOne);
    expect(result).to.deep.equal({
      Book: "24.98 (2 @ 12.49)",
      "Music CD": "16.49",
      "Chocolate bar": "0.85",
      "Sales Taxes": "1.50",
      Total: "42.32",
    });
  });

  it("should return basket two items with prices, amount, sale tax total, and total cost", () => {
    let basketTwo: IItemList[] = [
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
    const result = shoppingBasketReceipts(basketTwo);
    expect(result).to.deep.equal({
      "Imported bottle of perfume": "54.65",
      "Imported box of chocolates": "10.50",
      "Sales Taxes": "7.65",
      Total: "65.15",
    });
  });

  it("should return basket three items with prices, amount, sale tax total, and total cost", () => {
    let basketThree: IItemList[] = [
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
    const result = shoppingBasketReceipts(basketThree);
    expect(result).to.deep.equal({
      "Bottle of perfume": "20.89",
      "Imported bottle of perfume": "32.19",
      "Imported box of chocolates": "23.70 (2 @ 11.85)",
      "Packet of headache pills": "9.75",
      "Sales Taxes": "7.30",
      Total: "86.53",
    });
  });
});
