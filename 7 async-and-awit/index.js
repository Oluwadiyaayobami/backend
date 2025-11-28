const { rejects } = require("assert");
const { resolve } = require("path");

function division (a,b) {
    return new Promise((resolve,reject)=> {
        if (b === 0)reject('can not divide by 0')
            else resolve (a/b)
    })
}

async function sum(b,a) {
    try{
        let divisions =  await division(a,b)
        console.log('division ',divisions)
        console.log('sum',a+b)
    }
    catch(error){
        console.error(error)

    }
   
    
}
sum (2,10)