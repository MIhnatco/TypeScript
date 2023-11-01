//function to return what should be displayed for each 
function warrantyInfo(warranty) {
    switch (warranty) {
        case 'standard':
            return '90 day warranty';
        case 'extended':
            return '180 day extended warranty';
    }
}
function printLine(item) {
    console.log("Item: ".concat(item.name));
    console.log("Quantity: ".concat(item.quantity));
    if (item.warranty !== undefined) {
        console.log("Warranty: ".concat(warrantyInfo(item.warranty)));
    }
    else {
        console.log("Warranty: None");
    }
}
var fanBox = {
    name: 'box fan',
    quantity: 1
};
printLine(fanBox);
var heater = {
    name: 'space heater',
    quantity: 1,
    warranty: 'standard'
};
printLine(heater);
