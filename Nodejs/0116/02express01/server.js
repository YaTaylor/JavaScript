// 引入模块
const Express = require('express')
const path = require('path')
// 实例化,创建服务
const app = Express()
// express中专门设置静态文件的方法static
// path.join()添加路径
app.use(Express.static(path.join(__dirname,'public')))
app.use(Express.static(path.join(__dirname,'sources')))
// 1.登录的接口 API
//   /login GET  uname  upasswd

var user_info = {
    uname:'Jack Ma',
    upasswd:'123456'
}

// app.get('/register',(req,res)=>{
//     console.log(req.query)
//     let reg = req.query
//     user_info.uname = reg.uname
//     user_info.upasswd = reg.upasswd
//     res.send(req.query)
// })

app.get('/register',(req,res)=>{
    console.log(req.query)
    let uname = req.query.uname
    let upasswd = req.query.upasswd
    if(uname != null && uname != ''){
        if(uname != user_info.uname){
            let msg = {
                msg:'用户名通过',
                err:false
            }
            if(upasswd != null && upasswd != ''){
                msg['msg'] = '注册成功'
                msg['err'] = false
                user_info.uname = uname
                user_info.upasswd = upasswd
                // res.send(req.query)

                res.send(JSON.stringify(msg))
            }else{
                msg['msg'] = '密码不能为空'
                msg['err'] = true
                res.send(JSON.stringify(msg))
            }
        }else{
            let msg = {
                msg:'用户已存在',
                err:true
            }
            res.send(JSON.stringify(msg))
        }
    }else{
        let msg = {
            msg:'用户名为空',
            err:true
        }
        res.send(JSON.stringify(msg))
    }
        
})

// app.get('/register',(req,res)=>{
//     let get_query = req.query
//     console.log(get_query)
//     console.log(typeof(get_query))
//     let msg = {
//         msg:'',
//         err:false
//     }
//     if (get_query) {
//         if (get_query.uname != null || get_query.uname != '') {
//             if (get_query.uname != user_info.uname) {

//                 if (get_query.upasswd != null || get_query.upasswd != '') {
//                     user_info.uname = get_query.uname
//                     user_info.upasswd = get_query.upasswd
//                     msg['msg'] = '注册成功'
//                     msg['err'] = true
//                     res.send(JSON.stringify(msg))

//                 }else{
//                     msg['msg'] = '密码为空'
//                     msg['err'] = false
//                     res.send(JSON.stringify(msg))
//                 }
//             }else{
//                 msg['msg'] = '用户已存在'
//                 msg['err'] = false
//                 res.send(JSON.stringify(msg))
//             }
//         }
//     }else{
//         msg['msg'] = '请输入用户名和密码'
//         msg['err'] = false
//         res.send(JSON.stringify(msg))
//     }
// })



app.get('/login',(req,res)=>{
    // req 用来处理请求的数据
    // res 用来处理响应的数据
    // request 对象  表示 HTTP请求，包括请求的字符串、参数
    // 内容、HTTP头部等属性
    // 常见的属性有：
    // let app = req.app   //综合请求对象
    // let baseUrl = req.baseUrl    //获取路由就是当前请求的URL路径
    // let body = req.body    // GET无效，POST有效 请求体
    // let hostname = req.hostname   //获取主机名和端口
    // let masterip = req.ip    // 获取ip
    // let originalURL = req.originalUrl   //获取原始请求的URL
    // let parms = req.parms     //获取路由的参数
    // let query = req.query    //获取参数列表
    // let router = req.router   //获取当前的路由
    // let header = req.get()    //获取指定的HTTP请求头

    // res.send(`baseurl:${baseUrl}
    //     hostname:${hostname}
    //     ip:${masterip}
    //     oURl:${originalURL}
    //     parms:${parms}
    //     query:${query}
    //     router:${router}
    // `)

    let get_query = req.query
    // 三等是恒等
    if(get_query.uname === user_info.uname){
        let msg = {
            msg:'登录成功',
            err:false
        }
        if(get_query.upasswd === user_info.upasswd){
            res.send(JSON.stringify(msg))
        }else{
            msg['msg'] = '密码错误'
            msg['err'] = true
            res.send(JSON.stringify(msg))
        }
    }else{
        let msg = {
            msg:'账号不存在',
            err:true
        }
        res.send(JSON.stringify(msg))
    }

})

// 启动服务
app.listen(9000)
