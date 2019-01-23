const Express = require('express')
const BodyParser = require('body-parser')
const Multer = require('multer')
const Path = require('path')

const app = Express()

var oa = require("./mod/oauth/oauth")


// 开放文件夹
app.use(Express.static(Path.join(__dirname,'public')))
app.use(Express.static(Path.join(__dirname,'sources')))
app.use(Express.static(Path.join(__dirname,'sources/images'))) 

// 设置解析 form data 表单数据 针对 POST 请求
app.use(BodyParser.urlencoded({extended:false}))
app.use(BodyParser.json())

// 设置存储路径
let st = Multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,Path.join(__dirname,'images'))
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})

let multer = Multer({storage:st})

app.get('/',(req,res)=>{
    res.redirect('index.html')
})

// function cb(res,data){
//     // console.log('index.js',data)
//     res.send(data)
// }
app.post('/register',(req,res)=>{
    console.log(req)
    // 1.判断用户是否合法  2.存储有效文件中
    // oa.oauth({uname:'tom'},(data)=>{
    //     console.log('index.js',data)
    //     res.send(data)
    // })
    // oa.oauth({uname:'tom'},cb)
    // 最好判断req.body是否存在
    let user = req.body
    oa.oauth(user, function(err,result){
        // res.send(data)
        if(err){
            let obj = {
                code: '1001',
                err:  true
            }
            res.send(JSON.stringify(obj))
        }
        console.log('111',result)

        if(!result){
            // 没有找到这个用户  表示 这是新用户
            oa.add(user,function(err,result){
                if(err){
                    let obj = {
                        code:'50001',    //系统错误
                        err:true
                    }
                    res.send(JSON.stringify(obj))
                }
                if(result){
                    let obj = {
                        code:'',
                        err:false,
                        msg:result
                    }
                    res.send(JSON.stringify(obj))
                }else{
                    let obj = {
                        code:'',
                        err:true,
                        msg:result
                    }
                    res.send(JSON.stringify(obj))
                }
            })

        }else{
            // 有
            let obj = {
                code:'2001',   //表示用户已存在
                err: true
            }
            res.send(JSON.stringify(obj))
        }
    })

    // res.send(req.body)
})

app.post('/login',(req,res)=>{
    let user = req.body
    oa.login(user, function(err,result){
        // res.send(data)
        if(err){
            let obj = {
                code: '1001',
                err:  true
            }
            res.send(JSON.stringify(obj))
        }
        console.log('111',result)

        if(!result){
            // 没有找到这个用户  表示 这个用户不存在 请注册再登录
            let obj = {
                code:'3001',   //表示用户不存在
                err: true
            }
            res.send(JSON.stringify(obj))
        }else{
            // 有
            let obj = {
                code:'2001',   //表示用户已存在，验证登录
                err: false
            }
            res.send(JSON.stringify(obj))
        }
    })

})

app.get('/user',(req,res)=>{
    // 用户验证
    let user = req.query
    // 如果验证通过
    
    res.send(JSON.stringify({
        err:false,
        msg:'用户合法'
    }))
})


app.get('/user/dlist',(req,res)=>{
    let user = req.query
    oa.oauth(user,function(err,result){
        if(err){
            res.send(JSON.stringify({
                err:true,
                msg:'验证失败'
            }))
        }
        if(result){
            // 用户存在 便是验证通过
            user['dirname'] = user.uname
            oa.files(user,function(err,files){
                if(err){
                    res.send(JSON.stringify({
                        err:true,
                        msg:'目录不存在'
                    }))
                }
                res.send(JSON.stringify({
                    err:false,
                    files:files
                }))
            })
        }
    })
})



app.get('/user/plist',(req,res)=>{
    // 获取前端请求数据
    let user = req.query
    console.log('user:',user.dname)
    oa.oauth(user,function(err,result){
        if(err){
            res.send(JSON.stringify({
                err:true,
                msg:'验证失败'
            }))
        }
        console.log(user.dname,'dname')
        if(result){
            user['dirname'] = user.uname + '/' + user.dname
            oa.files(user,function(err,files){
                if(err){
                    res.send(JSON.stringify({
                        err:true,
                        msg:'目录不存在'
                    }))
                }
                res.send(JSON.stringify({
                    err:false,
                    files:files
                }))
            })

        }
    })
})



app.listen(10086)