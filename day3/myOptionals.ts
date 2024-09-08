type student = {
    name : string;
    roll : string;
    phone : string;
    address : string;
    aadhaar ?:number; //here the question mark ' ? ' is the optional property , so in this it is not compulsory to assign value in it ...
}

let studentData = {
    name :'ayush',
    roll : '123',
    phone : '1234',
    address : 'muz'
}
console.log(studentData)
export {}