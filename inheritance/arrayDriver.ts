import { shape } from "./shape";
import { circle } from "./circle";

let ms=new shape(10,15);
let mc = new circle(5,10,20);

// declare an array of shapes .. initially empty


let msd:shape[]=[];
msd.push(ms);
msd.push(mc);

for(let hoes of msd){
console.log(hoes.getInfo);
}