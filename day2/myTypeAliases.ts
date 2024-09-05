type User = {
    name:string;
    email:string;
    phone:number;
    isActive:boolean;
}

function createUser(user:User):User{
    return {name:user.name,email:user.email,phone:user.phone,isActive:user.isActive}
}
createUser({name:'ayush',email:'a@a.com',phone:123,isActive:true});
export {}