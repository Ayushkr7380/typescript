//In the world of abstract class ,these are almost like blueprint of class.

//We can not create object of abstract class.

//It's the responsibility of the class who is extending it to create object

abstract class User{
    constructor(
        public name : string,
        public email : string,
    ){

    }
}

 //The Following line will throw an error because User is an abstract class.
// const obj1 = new User("ayush","ayush@gmail.com");

class UserSon extends User{
    get greet():string{
        return `Hello ${this.name}`
    }
}

const obj1 = new UserSon("ayush","ayush@gmail.com");
console.log(obj1.greet);
export {} 