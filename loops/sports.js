"use strict";
let sports = ["Tennis", "Basketball", "Swimming", "Football", "Rugby"];
// old fashioned
// for(let i=0;i<sports.length;i++){
// console.log(sports[i]);
// }
// lets use simplified for loop
for (let tempsport of sports) {
    if (tempsport == "Football") {
        console.log(`damn bruh ${tempsport} is my favourite sport`);
    }
    else {
        console.log(tempsport);
    }
}
