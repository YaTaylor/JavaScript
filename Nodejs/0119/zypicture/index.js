const Express = require('express')
const BodyParser = require('body-parser')
const Multer = require('multer')
const Path = require('path')
const fs = require('fs')


let app = Express()

app.use(Express.static(Path.join(__dirname,'public')))
app.use(Express.static(Path.join(__dirname,'sources')))

app.use(BodyParser.urlencoded({extended:false}))
app.use(BodyParser.json())




app.get('/',(req,res)=>{
    res.redirect('index1.html')
    // console.log('首页')
    // res.send()
})
app.post('/login',(req,res)=>{
    console.log(req.body)
    fs.readFile('./sources/user.json',(err,fd)=>{
        if(err){
            throw err
        }
        console.log(JSON.parse(fd.toString()))
        var jsonobj = JSON.parse(fd.toString())
        for(let i = 0;i<jsonobj.length;i++){
            console.log(jsonobj[i]['uname'],jsonobj[i]['upasswd'])
            if (req.body.uname == jsonobj[i]['uname']) {
                if (req.body.upasswd != jsonobj[i]['upasswd']) {
                    console.log('密码错误')
                    // 密码不正确
                    // 局部刷新
                    // res.send('密码错误')
                    let msg = {
                        msg: '密码错误',
                        err: true
                    }
                    res.send(JSON.stringify(msg))
                } else {
                    console.log('密码正确')
                    // 如果密码正确
                    // 要进行跳转/重定向 home 主页面
                    // res.redirect('home.html')
                    let msg = {
                        msg: '登录成功',
                        err: false
                    }
                    res.send(JSON.stringify(msg))
                }

            } else {
                // console.log('用户名错')
                // res.send('用户名不存在/错误')
                if(i==jsonobj.length-1){
                    let msg = {
                        msg: '用户名不存在/错误',
                        err: true
                    }
                    res.send(JSON.stringify(msg))
                    
                }else{
                    continue
                }
            }    
             
    
        }
    })
    // console.log(user)
    
    // res.send('login')
})

app.post('/regitser',(req,res)=>{
    console.log(req.body)  
    fs.readFile('./sources/user.json',(err,fd)=>{
        if(err){
            throw err
        }
        console.log(JSON.parse(fd.toString()))
        var jsonobj = JSON.parse(fd.toString())
        for(let i = 0;i<jsonobj.length;i++){
            console.log(jsonobj[i]['uname'],jsonobj[i]['upasswd'])
            if(req.body.name == jsonobj[i]['uname']){
                let msg = {
                    msg: '用户名已存在/请重新输入',
                    err: true
                }
                res.send(JSON.stringify(msg))
                
            }else{
                if(i==jsonobj.length-1){
                    let msg = {
                        msg: '注册成功',
                        err: false
                    }
                    res.send(JSON.stringify(msg))    
                }else{
                    continue
                }

            }
        }
    })

})

app.listen(9999)