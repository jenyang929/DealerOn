// SALES TAX PROBLEM 2

export interface IPurchasedItem {
  item: string;
  amount: number;
  cost: number;
  imported: boolean;
  taxException: boolean;
}

export interface IItem {
  [key: string]: IPurchasedItem;
}

export interface IReceipt {
  [key: string]: string;
}

export function convertToDollars(num: number): string {
  return (num / 100).toFixed(2);
}

export function roundToNearest5(num: number): number {
  return Math.ceil(num / 5) * 5;
}

// function that converts input into the receipt output desired
export function shoppingBasketReceipts(input: IPurchasedItem[]): IReceipt {
  let totalCost = 0;
  let totalTaxCost = 0;
  const items: IItem = {};

  for (let i = 0; i < input.length; i++) {
    const obj = input[i];
    const itemName = obj.item;
    // getting total count per item
    if (!items[itemName]) {
      items[itemName] = obj;
    } else {
      items[itemName].amount++;
    }

    //applying sales or import tax per item
    let roundedTax = 0;

    if (!obj.imported && !obj.taxException) {
      roundedTax = roundToNearest5(obj.cost * 0.1);
    } else if (obj.imported && obj.taxException) {
      roundedTax = roundToNearest5(obj.cost * 0.05);
    } else if (obj.imported && !obj.taxException) {
      roundedTax =
        roundToNearest5(obj.cost * 0.05) + roundToNearest5(obj.cost * 0.1);
    }

    // if there is some form of tax - sales or imported
    if (obj.imported || !obj.taxException) {
      totalTaxCost += roundedTax;
      // adjust the cost of the item to include tax
      items[itemName].cost = roundedTax + obj.cost;
    }
    //add new cost to totalCost of all products
    totalCost += items[itemName].cost;
  }

  //creating the desired receipt output of items
  let receipt: IReceipt = {};
  for (let item in items) {
    let supply = items[item];
    if (supply.amount !== 1) {
      receipt[item] = `${convertToDollars(supply.cost * supply.amount)} (${
        supply.amount
      } @ ${convertToDollars(supply.cost)})`;
    } else if (supply.amount === 1) {
      receipt[item] = convertToDollars(supply.cost);
    }
  }
  receipt["Sales Taxes"] = convertToDollars(totalTaxCost);
  receipt["Total"] = convertToDollars(totalCost);

  return receipt;
}
