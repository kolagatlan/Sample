"use strict"

let marks;
marks=75;

function grade(m){
switch(true){
case m>=90 : console.log("S grade");break;
case m>=80 : console.log("A grade");break;
case m>=70 : console.log("B grade");break;
case m>=60 : console.log("C grade");break;
case m>=50 : console.log("D grade");break;
case m>=40 : console.log("E grade");break;
case m>=0  : console.log("Student has failed");break;

default : console.log("invalid marks");
}

}

grade(marks);

