"use strict"

let a=80, b=80, c=20;

function triangle(a,b,c){
    if(a===b && b===c){
        console.log("Equilateral triangle");

    }

    else if(a!=b && b!=c && c!=a){
        console.log("Scalene triangle");
        
    }

    else if(a===b || b===c || a===c ){
        console.log("Isosceles triangle");
        
    }
}

triangle(a,b,c);