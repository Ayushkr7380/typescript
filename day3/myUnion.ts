let name : number | string 

name = 'ayush'
name = 124


let address : number | string = "muz";
address = 1234;

function data(name : string | number ){
    if(typeof name === 'string'){
        name.toLowerCase()
    }
    if(typeof name === "number"){
        name.toFixed()
    }
}

data('Ayush');
data(0);


type User = {
    name : string;
    address : string;
}

type Admin = {
    id : string;
    name : string;
}

let ayush : Admin | User ;
//User Data
ayush = {
    name : 'ayush',
    address : 'Muz'
}

//Admin Data
ayush = {
    id : '123',
    name : 'ayush'
}

export {}