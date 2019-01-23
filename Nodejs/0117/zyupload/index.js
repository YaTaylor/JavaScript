const Express = require('express')
const BodyParser = require('body-parser')
const Multer = require('multer')
const Path = require('path')
const fs = require('fs')

const app = Express()

app.use(Express.static(Path.join(__dirname,'public')))
app.use(Express.static(Path.join(__dirname,'sources')))
app.use(BodyParser.urlencoded({extended:false}))

var name = ''


// let multer = Multer({dest:uploadDir})

// let single = multer.single('logo')

var storage = Multer.diskStorage({
    destination:(req,file,cb)=>{
        
        
        cb(null,uploadDir)
    },
    file
})





app.post('/upload',single,(req,res)=>{
    console.log(req.body)
    name = req.body.uname
    Makedir(req.body.uname)
    res.send(req.body)

})

// 以用户名创建文件夹
function Makedir(uname){
    let path1 = './sources/' + uname 
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





app.listen(8888)