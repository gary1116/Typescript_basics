class parameter_prop{

    constructor(private _firstName:String, private _lastName:String){

    }


    public get firstName():String{
        return this._firstName;
    }

    public set firstName(value: String){
        this._firstName=value;
    }


    public get lastName():String{
        return this._lastName;
    }

    public set lastName(value: String){
        this._lastName=value;
    }
}

let b = new parameter_prop("Harry" ,"g");
console.log(b.firstName);
console.log(b.lastName);
