class User{
    
    private personalId : number = 1

    constructor(
        public name : string,
        public email : string ,
        isActive : boolean
    ){
        
    }

    get getUserEmail():string{
        return `${this.email}`
    }

    get getPersonalId():number{
        return this.personalId
    }
}

const obj = new User('ayush','ayush@123.com',true);

export {}