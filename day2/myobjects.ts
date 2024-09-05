const user = {
    name : 'ayush',
    email : 'a@a.com',
    isValid :true
} //designing an object like this does not make any sense 

//The usecase of object is through the function , you have to actually pass the object into the function or you have to return object through a function..

//pass the object into a function
function createUser({name:string,isValid:boolean}){}
createUser({name:'ayush',isValid:true})

//returning object from a function
function createCourse():{name:string,email:string}{
    return {name:'ayush',email:'a@a.com'}
}
createCourse();

//Odd behaviour of object..
function oddBehaviour({name:string,isValid:boolean}){}
// oddBehaviour({name:'ayush',isValid:true,email:"a@a.com"})//now if you wan to add email like this then it will give you an error
//for this what we can do is , we can store the object in a variable like this.

let newUser = {name:'ayush',isValid:true,email:"a@a.com"}
oddBehaviour(newUser);//Now the error is gone..

export {}