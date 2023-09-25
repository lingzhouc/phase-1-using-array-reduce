const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// count how many batteries
let totalBatteries = batteryBatches.reduce((accumulator, element) => {
    return accumulator + element
})