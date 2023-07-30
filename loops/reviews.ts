let reviews:number[] = [4, 6, 5, 7, 44];


let total:number=0;
for (let i = 0; i < reviews.length; i++) {
  console.log(reviews[i]);
  total = total+reviews[i];
  console.log(total);
}
