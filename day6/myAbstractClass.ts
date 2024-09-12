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

// const obj1 = new User("ayush","ayush@gmail.com"); //Here we are not able to create object of this class as this class is abstract class..
export {} 