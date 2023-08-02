"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const circle_1 = require("./circle");
let mc = new circle_1.circle(5, 10, 20);
// declare an array of shapes .. initially empty
let msd = [];
msd.push(mc);
for (let hoes of msd) {
    console.log(hoes.getInfo());
    console.log(hoes.calculate_area());
}
