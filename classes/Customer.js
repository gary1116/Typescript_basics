"use strict";
class Customer {
    constructor(first, last) {
        this.firstName = first;
        this.lastName = last;
    }
}
let myCustomer = new Customer("Gary", "Meledath");
// myCustomer.firstName = "Gary";
// myCustomer.lastName = "Meledath";
console.log(`Hi my name is ${myCustomer.firstName} ${myCustomer.lastName}`);
