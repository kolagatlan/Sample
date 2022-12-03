"use strict"

let start=1, end=100;

function prime(a,b){
//finding the prime number
for(let i=a; i<=b; i++){
    
    let flag=0;

    for(let j=2; j<i; j++ ){
        
        if(i%j === 0){
            flag=1;break;
        }
        else{
            continue;
        }
    }

    if( flag === 0){
        //finding the factorial of prime number
        let fact=1;

        for(let k=i; k>=1; k--){
            fact=fact*k;
        }

        console.log(`factorial of ${i} is ${fact}`);
    }
    
}

}

prime(start,end);


