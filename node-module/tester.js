const firstModule  = require('./index')

console.log(firstModule.addition(2,3))
console.log(firstModule.subract(200,10))



basically the node module allow users to be able to break function into smaller pieces of reusable code that can be exported or imported  to export it we do firstModule.exports = {

}
and we require it from any aplication we want to use them for

by seting a constant and atteching it there 
