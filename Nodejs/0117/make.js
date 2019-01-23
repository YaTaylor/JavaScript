const fs = require('fs')
function Make(name){
    let path1 = './make1/' + name 
    console.log(path1)
    fs.mkdir(path1,(err)=>{
        if (!err){
            // throw err
            console.log('文件夹不存在')
        }else{
            console.log('文件夹存在')
        }    
    })    
}

Make('Tom2')