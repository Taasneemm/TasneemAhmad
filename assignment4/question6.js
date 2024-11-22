// function will return array in asc order
function ascOrder (a,b) {
    return a - b;
}


// Modify the code below:

let firstLowestPrice;
let secondLowestPrice;
let thirdLowestPrice;

const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82]
let ascOrderAmdPrice = [];
ascOrderAmdPrice = amdPrices.sort(ascOrder);

let lowestPrice;
let data = [];
// since we taking 3 lowest prices, we track count of 3
let counter = 0;
for (let i = 0; i < amdPrices.length; i++) {
    if (counter < 3) {
        data.push(ascOrderAmdPrice.shift())
        counter += 1
    }
}

firstLowestPrice = data[0]
secondLowestPrice = data[1]
thirdLowestPrice = data[2]


console.log(`The three lowest prices are ${firstLowestPrice}, ${secondLowestPrice}, ${thirdLowestPrice} `);
	