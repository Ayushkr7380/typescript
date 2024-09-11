//Protected Keyword ...

//Protected keyword helps to access the property or methods from the inherited class also..

class father{
    protected money : number = 1234
    constructor(
        public name : string,
    ){
        
    }
}


class son extends father{
    spendMoney(){
        this.money = 123
    }
}

const obj2 = new son("ayush");

export {}