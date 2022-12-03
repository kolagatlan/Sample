"use strict"

let a=3, b=5, sum1=0, sum2=0, max=1000;

for(let i=1; i<max; i++) {

    if(i%a === 0 )
    {
        sum1=sum1+i;
    }
    if(i%b === 0 )
    {
        sum2=sum2+i;
    }
}
console.log(`sum of the multiples of ${a} is ${sum1} under 1000`);
console.log(`sum of the multiples of ${b} is ${sum2} under 1000`);
