import {shape} from "./shape";

export class circle extends shape{

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