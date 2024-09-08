interface user {
    readonly _id : string
    name : string,
    email : string,
    roll : string,
    isActive : boolean,
    startTrail : () => string //we can pass function inside the interface..
    startTrail1(): number //we can also pass function like this in the interface..
    getCoupon(couponName:string):number
}

//we can add additional data to interface by create another interface with the same name ...

interface user{
    isAdmin : boolean
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
    startTrail1:()=> {
        return 123
    },
    getCoupon :(name : "ayush10")=>{
        return 10
    },
    isAdmin : false
}

//Also we can extend all the type from one interface to another and add more into that  ....

interface Admin extends user{
    isPrivate :boolean
}

const ayushAdmin : Admin ={
    isPrivate : true,
    _id : "123432",
    name : 'ayush',
    email : "a@a.com",
    roll : '123',
    isActive : true,
    startTrail : ()=>{
        return "i am string"
    },
    startTrail1:()=> {
        return 123
    },
    getCoupon :(name : "ayush10")=>{
        return 10
    },
    isAdmin : false

}



export {} 