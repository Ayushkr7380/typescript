type User = {
    readonly _id:string
    name:string;
    email:string;
    isActive:boolean;
}

let userData:User= {
    _id:"234",
    name:"ayush",
    email:"a@a.com",
    isActive : true
}

//Here i can change the name of this object as we have not passed the readOnly keyword to this name key...
userData.name = 'abhijeet' 

//Here on the other hand , if i try to change the _id key then i will see the error that you can not assign to this key as it is only read only property ..

// userData._id = '1234'


export {}