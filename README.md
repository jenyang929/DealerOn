# DealerOn Coding Challenge

Completed problem #2: Sales Tax with Typescript

## Explanation 
Based on the given inputs, I created an interface that described the types for the item (string), amount (number), cost (number), was it imported (boolean) and is there a taxException (boolean). The total pricing of each item was dependent on whether or not they were imported (+5% tax) or not exempted from sales tax (+10%)

Prices were written in thousands because floats do not accurately represent the base 10 multiples that we use for dollars. 

The main shoppingBasketReceipts function takes in the original input as an array (list of items and it's price). It loops through the input array to get the total count per item if there are duplicates. As it loops, it also determines if there is additional sales or import tax by utilizing the roundToNearest5 math function to round the appropriate decimals. 

The convertToDollars function takes in the price in thousands, after adding tax, and converts to the correct dollar to two decimal places. 

A receipt interface was created to hold the items with its prices, amount, total sales tax, and total cost of the entire list, producing the intended outputs.


## Set up
Npm install Typescript, Mocha, Chai, @types/chai, @types/mocha 

## Testing
Utilized Mocha and Chai to test the 3 inputs resulting in the 3 desired outputs. 

## To install:

Please fork and clone this repo.

To install the dependencies:

```
npm install
```

To start your test specs 

```
npm test
```
