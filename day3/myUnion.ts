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

export {}