import { shape } from "./shape";
import { circle } from "./circle";

let ms=new shape(10,15);
console.log(ms.getInfo());

let mc = new circle(5,10,20);
console.log(mc.getInfo());