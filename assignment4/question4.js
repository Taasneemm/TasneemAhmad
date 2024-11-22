const msftData = [
	[190.15, 196.21, 191.07, 194.44],
	[193.61, 195.89, 190.12, 193.40]
];

// Write your code below
/* Finding the average closing price */
let sumOfClosingPrice = 0;

// assume each day has a closing price
let noOfDays = msftData.length;

let averageClosingPrice;

for (let dailyPrices of msftData) {
	sumOfClosingPrice += dailyPrices[3];
}

averageClosingPrice = (sumOfClosingPrice/noOfDays).toFixed(2)

console.log(`Average closing price of MSFT is ${averageClosingPrice}`)