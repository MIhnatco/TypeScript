

type Warranty = 'standard' | 'extended';

//function to return what should be displayed for each 
function warrantyInfo(warranty: Warranty): string {
    switch(warranty){
        case 'standard': 
            return '90 day warranty';
        case 'extended':
            return '180 day extended warranty'
    }
}

interface LineItem {
    name: string;
    quantity: number;

    //'undefined' if not present
    warranty?: Warranty;
}

function printLine(item: LineItem): void {
    console.log(`Item: ${item.name}`);
    console.log(`Quantity: ${item.quantity}`)

    if(item.warranty !== undefined){
        console.log(`Warranty: ${warrantyInfo(item.warranty)}`)
    } else {
        console.log(`Warranty: None`);
    }
}

const fanBox: LineItem = {
    name: 'box fan', 
    quantity: 1
}

printLine(fanBox)
const heater: LineItem = {
    name: 'space heater', 
    quantity: 1, 
    warranty: 'standard'
}

printLine(heater)