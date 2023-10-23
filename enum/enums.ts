

enum Days {
    Sunday,     //0
    Monday,    // 1
    Tuesday,   // 2
    Wednesday, // 3
    Thursday,  // 4
    Friday,    // 5
    Saturday    //6
}

let today: Days = Days.Wednesday
console.log("Today is " + today)

console.log("Reverse mapping")

let dayName: string = Days[3]
console.log("Today is " + dayName)

console.log("Custom values")
enum Colors {
    Red = '#f00', 
    Green = '#0f0', 
    Blue = '#00f'
}

let red: string = Colors.Red;
console.log(red);

//reverse mapping not working with custom values
let colorName: string = Colors['#00f'];
console.log(colorName);