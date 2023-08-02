"use strict";
class get_set {
    constructor(age, name) {
        this._age = age;
        this._name = name;
    }
    // getters and setters
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get age() {
        return this._age;
    }
    set age(value) {
        this._age = value;
    }
}
let random = new get_set(23, "Gary Meledath");
console.log(random.age);
console.log(random.name);
