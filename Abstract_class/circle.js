"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.circle = void 0;
const shape_1 = require("./shape");
class circle extends shape_1.shape {
    calculate_area() {
        let pi = 3.14;
        let area;
        return pi * this._radius * this._radius;
    }
    constructor(X, Y, _radius) {
        super(X, Y);
        this._radius = _radius;
    }
    get radius() {
        return this._radius;
    }
    set radius(value) {
        this._radius = value;
    }
    getInfo() {
        return super.getInfo() + ` radius=${this._radius}`;
    }
}
exports.circle = circle;
