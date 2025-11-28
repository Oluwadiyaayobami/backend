const path = require('path')
const fs = require('fs')
const { error } = require('console')


const foldername = path.join(__dirname,'testingthis')
fs.mkdir(foldername,(error) =>{
    if(error){
        console.log('folder already exist ')
    }
    else{
        console.log('folder cerated ')
    }

    const filenametobe = path.join(foldername,'server.js')
    fs.writeFile(filenametobe,"console.log('welcome')",(error) => {
        if(error){
            console.log('error occured during ceration ')
        }
        else{
            console.log('file cerated ')
        }
        fs.appendFile(filenametobe,'\nconsole.log("good moring")' ,(error) => {
            if (error) {
                throw new error
                
            }
            else{
                console.log('file append ')
            }
        })
        
    })

})
