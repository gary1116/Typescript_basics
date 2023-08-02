"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shape_1 = require("./shape");
const circle_1 = require("./circle");
let ms = new shape_1.shape(10, 15);
let mc = new circle_1.circle(5, 10, 20);
// declare an array of shapes .. initially empty
let msd = [];
msd.push(ms);
msd.push(mc);
for (let hoes of msd) {
    console.log(hoes.getInfo);
}
