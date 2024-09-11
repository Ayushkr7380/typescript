//basic class and object 
class User {
    email : string
    name : string
    city : string = 'muz'
    constructor(email : string , name : string){
        this.email = email;
        this.name = name;
    }
}

const obj = new User('a@a.com','ayush');
console.log(obj);

//private and public keyword in typescript classes
class User1{
    public email : string //Here we have marked email as public 

    name : string //Here we have not marked it as public or private but it is considered as public bydefault 

    private id : string //We can marked private using "#" also like "#id"..
    constructor(email : string , name : string , id : string ){
        this.email = email
        this.name = name
        this.id = id
    }
}

const obj1 = new User1('ayush@123.com','ayush','123');

console.log(obj1.email); //Here we can easily log email as it is not set private..

// console.log(obj1.id); // Here we can not log the id as we have set it as private..so it is not accessible inside the class itself.. 

export {}