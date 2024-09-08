interface user {
    readonly _id : string
    name : string,
    email : string,
    roll : string,
    isActive : boolean,
    startTrail : () => string //we can pass function inside the interface..
    startTrail1(): number //we can also pass function like this in the interface..
}

let data : user = {
    _id : "123432",
    name : 'ayush',
    email : "a@a.com",
    roll : '123',
    isActive : true,
    startTrail : ()=>{
        return "i am string"
    },
    startTrail1() {
        return 123
    },
}
export {} 