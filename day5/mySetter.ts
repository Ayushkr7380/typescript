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
}

const obj = new User('ayush','ayush@gmail.com');
export {}