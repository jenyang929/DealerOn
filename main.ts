// SALES TAX PROBLEM 2

export interface IItemList {
  item: string;
  amount: number;
  cost: number;
  imported: boolean;
  taxException: boolean;
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
export function shoppingBasketReceipts(input: IItemList[]): IReceipt {
  let totalCost = 0;
  let totalTaxCost = 0;
  let items: any = {};

  for (let i = 0; i < input.length; i++) {
    let obj = input[i];

    // getting total count per item
    if (!items[obj.item]) {
      const item = { ...obj };
      items[obj.item] = obj;
    } else {
      items[obj.item].amount++;
    }

    //applying sales or import tax per item
    let roundedTax = 0;
    if (obj.imported === false && obj.taxException === false) {
      roundedTax = roundToNearest5(obj.cost * 0.1);
    } else if (obj.imported === true && obj.taxException === true) {
      roundedTax = roundToNearest5(obj.cost * 0.05);
    } else if (obj.imported === true && obj.taxException === false) {
      roundedTax =
        roundToNearest5(obj.cost * 0.05) + roundToNearest5(obj.cost * 0.1);
    }

    if (!(obj.imported === false && obj.taxException === true)) {
      totalTaxCost += roundedTax;
      items[obj.item].cost = roundedTax + obj.cost;
    }
    totalCost += items[obj.item].cost;
  }

  //creating the desired receipt output
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
