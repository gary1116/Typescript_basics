import { shape } from "./shape";
import { circle } from "./circle";


let mc = new circle(5,10,20);

// declare an array of shapes .. initially empty


let msd:shape[]=[];

msd.push(mc);

for(let hoes of msd){
console.log(hoes.getInfo());
console.log(hoes.calculate_area());
}