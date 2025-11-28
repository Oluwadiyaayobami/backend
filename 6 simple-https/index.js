// const http = require('http')

// const server  = http.createServer((req,res) => {
//     res.writeHead(200, {'content-type' : 'text/plain'})
//     res.write('how are you doing ')
//     res.end()

// })
// const port  =3001 
// server.listen(port,()=>{
//     console.log(`port running on port ${port}`)
// })





const { create } = require('domain')
const { write } = require('fs')
const http = require('http')

const server = http.createServer((req,res) =>{
    res.writeHead(200,{'content-type': 'text/plain'})
    res.end('welcome back')

})
const port  = 3000;
server.listen(port, ()=>{
    console.log(`port running in ${port}`)
})