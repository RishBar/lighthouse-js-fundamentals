const chorus = "Let's dance!";
for (let repeat = 0; repeat < 10; repeat++) {
  console.log(chorus);
}
console.log("Until the sun comes up!");


const chorus = "Let's dance!";
for (let repeat = 0; repeat < 10; repeat++) {
  if (repeat === 5) {
    console.log('*changes key*');
  }
  console.log(chorus);
}
console.log("Until the sun comes up!");



//looping array
const amounts = [61.00, 52.25, 112.99, 5.00]; 
const total = 0;
for (let amount of amounts) {
  total += amount;
}
console.log('Order total is: ', total);