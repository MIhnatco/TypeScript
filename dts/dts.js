"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mylib_1 = require("./mylib");
var message = "hello";
var upper = (0, mylib_1.setCase)(message, 'uppercase');
console.log(upper);
// Useful links:
// https://www.typescriptlang.org/docs/handbook/declaration-files/templates/module-d-ts.html
