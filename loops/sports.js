var sports = ["Tennis", "Basketball", "Swimming", "Football", "Rugby"];
// old fashioned
// for(let i=0;i<sports.length;i++){
// console.log(sports[i]);
// }
// lets use simplified for loop
for (var _i = 0, sports_1 = sports; _i < sports_1.length; _i++) {
    var tempsport = sports_1[_i];
    if (tempsport == "Football") {
        console.log("damn bruh ".concat(tempsport, " is my favourite sport"));
    }
    else {
        console.log(tempsport);
    }
}
