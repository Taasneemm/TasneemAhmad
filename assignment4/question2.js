const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Write your code below
/* Calculate 7-day simple moving average */

/* use as accumulation variable */
let sumTotalPrice = 0;
let noOfDays;
let sevenDaySMA;

noOfDays = amdPrices.length;

for (let dailyPrice of amdPrices) {
    sumTotalPrice += dailyPrice;
}

sevenDaySMA = (sumTotalPrice/noOfDays).toFixed(2);

console.log(`The 7-day SMA of AMD is ${sevenDaySMA}`);




