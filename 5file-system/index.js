const fs = require('fs')
const path = require('path')


const filepath  =  path.join(__dirname,'filesystem')

fs.mkdir(filepath,(error) => {
    if(error){
        console.log('error cerating file ')
    
    }
    else{
        console.log('file cerated succesfuly ')
    }

    const folderfile = path.join(filepath,'server.js')

        fs.writeFile(folderfile,"console.log('welcome')" ,(error)=>{
        if(error){
            console.log('file was not added ')
        }
        else{
            console.log('file cerated sucessfuly ')
        }


            const readfile  = fs.readFileSync(folderfile,'utf8' )
            console.log(readfile ,'file read sucssfuly ')

        fs.appendFileSync(folderfile, "conole.log('i just added this file')")
        console.log('new file added ')
})

})


