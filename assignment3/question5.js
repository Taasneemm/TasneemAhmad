const bacData = [190.15, 194.21, 191.07, 192.44, 129000];

// Write your code below
/* 
- index 0 - Low
- index 1 - High
- index 2 - Open
- index 3 - Close
- index 4 - Volume
*/

if (bacData[3] > bacData[2]) {
    if (bacData[4] > 100000) {
        console.log("Strong bullish");
    } else {
        console.log("Bullish");
    }
} else if (bacData[3] < bacData[2]) {
    if (bacData[4] > 10000) {
        console.log("Strong Bearish");
    } else {
        console.log("Bearish");
    }
} else if (bacData[3] === bacData[2]) {
    console.log("neutral");
}


    

