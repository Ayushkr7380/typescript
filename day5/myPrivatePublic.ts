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
console.log(obj)
export {}