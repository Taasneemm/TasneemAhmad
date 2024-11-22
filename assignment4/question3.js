const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Write your code below
/* Calculate 7-day simple moving average */

/* use as accumulation variable */
let sumTotalPrice = 0;
let noOfDays;
let sevenDaySMA;
/* will count no of days daily price above 7 -day SMA*/
let counter = 0;

noOfDays = amdPrices.length;

for (let dailyPrice of amdPrices) {
    sumTotalPrice += dailyPrice;
}

sevenDaySMA = (sumTotalPrice/noOfDays).toFixed(2);

for (let priceDaily of amdPrices) {
    if (priceDaily > sevenDaySMA) {
        counter += 1;
    }
}

console.log(`Number of days AMD was above the 7-day SMA is: ${counter}`);




