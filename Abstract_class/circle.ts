import {shape} from "./shape";

export class circle extends shape{

calculate_area(): number {
   let pi:number=3.14;
   let area:number;
    return pi*this._radius*this._radius;
}

constructor(X:number, Y:number,private _radius:number){
    super(X,Y);
}

public get radius():number{
    return this._radius;

}

public set radius(value:number){
this._radius=value;
}

getInfo(): String {
    return super.getInfo()+ ` radius=${this._radius}`;
}
}