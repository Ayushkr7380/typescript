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

//Issue with the function
function val(num:number){
    return "ayush" //here i have not mentioned with i am returning so i can return any type of value i.e string,number,boolean etcetra
}
val(12)

//actual approch 
function value1(num:number):number{
    return num //In this example i have mentioned the type which i am returning..
}
value1(10)

//with arrow function
let name = (nn:string):string =>{
    return nn
}
name('ayush')
export {}
