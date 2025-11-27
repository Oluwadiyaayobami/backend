const firstModule  = require('./index')

console.log(firstModule.addition(2,3))
console.log(firstModule.subract(200,10))



// basically the node module allow users to be able to break function into smaller pieces of reusable code that can be exported or imported  to export it we do firstModule.exports = {

// }
// and we require it from any aplication we want to use them for

// by seting a constant and atteching it there 
// const teastername = require('from file location') 


console.log('filenameefrom tester.js',__filename);// this gives the current file name of the project  
console.log('dirnameefrom tester.js',__dirname);// this give you the the folder that the dile is inside 