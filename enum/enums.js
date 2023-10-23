var Days;
(function (Days) {
    Days[Days["Sunday"] = 0] = "Sunday";
    Days[Days["Monday"] = 1] = "Monday";
    Days[Days["Tuesday"] = 2] = "Tuesday";
    Days[Days["Wednesday"] = 3] = "Wednesday";
    Days[Days["Thursday"] = 4] = "Thursday";
    Days[Days["Friday"] = 5] = "Friday";
    Days[Days["Saturday"] = 6] = "Saturday"; //6
})(Days || (Days = {}));
var today = Days.Wednesday;
console.log("Today is " + today);
console.log("Reverse mapping");
var dayName = Days[3];
console.log("Today is " + dayName);
console.log("Custom values");
var Colors;
(function (Colors) {
    Colors["Red"] = "#f00";
    Colors["Green"] = "#0f0";
    Colors["Blue"] = "#00f";
})(Colors || (Colors = {}));
var red = Colors.Red;
console.log(red);
var colorName = Colors['#00f'];
console.log(colorName);
