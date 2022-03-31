const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// function sum(acc, val) {
//   return acc + val;
// }

// let totalBatteries = batteryBatches.reduce(sum,0)
// console.log(totalBatteries)

let totalBatteries = batteryBatches.reduce((acc,val) => acc + val, 0)
console.log(totalBatteries)