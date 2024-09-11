const User = class {

    private idNumber : number = 1
    constructor(
        public name : string,
        public email : string
    ){

    }

    set setValue(maxNumber){
        if(maxNumber > 1){
            throw new Error("Course count should be more than 1..");
        }
        this.idNumber = maxNumber;
    }

    //We can also create private or public methods ..
    //For some reasons if we want to access the method only in the class then we can create something like this ...
    private deleteToken(){
        console.log("Token Deleted...")
    }
}

const obj = new User('ayush','ayush@gmail.com');
export {}