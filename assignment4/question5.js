const disneyData = [
	{
		open: "120.54",
		high: "122.56",
		low: "120.54",
		close: "121.09"
	},
	{
		open: "123.15",
		high: "127.76",
		low: "123.02",
		close: "124.92"
	}
];

// Write your code below
// Finding the average closing price
let sumOfClosingPrice = 0;
let noOfClosingDays = 0;
let averageClosingPrice;
for (let dailyPriceObject of disneyData) {
	if ("close" in dailyPriceObject) {
		noOfClosingDays += 1;
		sumOfClosingPrice += parseFloat(dailyPriceObject["close"]);
	}
}

averageClosingPrice = (sumOfClosingPrice/noOfClosingDays).toFixed(2);

console.log(`Average closing price of Disney is ${averageClosingPrice}`)

