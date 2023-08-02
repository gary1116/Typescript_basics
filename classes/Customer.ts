class Customer{
    firstName: String;
    lastName:String;

constructor(first:String, last:String){

    this.firstName = first;
    this.lastName=last;
}

}

let myCustomer = new Customer("Gary", "Meledath");
// myCustomer.firstName = "Gary";
// myCustomer.lastName = "Meledath";

console.log(`Hi my name is ${myCustomer.firstName} ${myCustomer.lastName}`);