class get_set {

    private _age: number;
    private _name: String;


    constructor(age: number, name: String) {
        this._age = age;
        this._name = name;
    }

    // getters and setters

    public get name(): String {
        return this._name;
    }
    public set name(value: String) {
        this._name = value;
    }

    public get age(): number {
        return this._age;
    }
    public set age(value: number) {
        this._age = value;
    }



}


let random = new get_set(23,"Gary Meledath");

console.log(random.age);
console.log(random.name);