function addnum(num1:number){
    return num1
}
addnum(5);

function sum1(n1:number){
    return n1 + 10;
}
sum1(23);

function number1(s1:number){
    return s1.toFixed;
}
number1(12.5657);

function name1(name:string){
    return name.toUpperCase()
}
name1("ayush");

//arrow function
let data = (name:string,roll:string,phone:number) =>{}
data("ayush","215ayush",123);

//arrow function with default value
let defdata = (name:string,phone:number,city:string ="muzaffarpur") =>{}
defdata("ayush",123);

export {}
