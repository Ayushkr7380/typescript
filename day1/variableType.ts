//string 
let name1:string = 'ayush';
console.log(name1);

//number 
//In TypeScript we have number varaible , only number varaible , there is no float or int....

let roll:number = 123;
console.log(roll);

let num:number
num = 2
console.log(num)

let price:number = 200.45;
console.log(price);

let n1 = 123 //typescript is smart enough to detect that it is a number without putting :<varaible type> 
console.log(n1)

//boolean

let isBoy:boolean = true;
console.log(isBoy);

// ------ when to use :<variable type> ------ 
let hero:string
function heroname(){
    return "IronMan"
}
hero = heroname();


export {}