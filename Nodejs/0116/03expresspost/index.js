/*express 处理POST 请求
GET 和 POST 区别之一就是 参数
GET的参数 是在URL 中url?key1=value1&key2=value2
POST的参数 也可以放在URL中 这种情况是主动放在URL中用法和GET一样
一般情况下 POST的参数是放在 请求报文中的 请求体中 保护参数安全(相对)
*/
const Express = require('express')
// 

const bodyParser = require('body-parser')
const path = require('path')
const  app = Express()

// body-parser 用于解析POST参数列表
// 它也是一个第三方的模块，也叫中间件
// npm i body-parser --save

// 通过use 来使用body-parser 进行POST参数解析
/*一共有4种解析方式
常用的2种：
第一种 urlencloded() 是专门用来解析form表单类型的请求参数
extended:true/false
true:表示解析的结果中键值对的值可以是任何类型
false:表示值只能是一个string 也可以是一个数组
第二种：bodyParser.json()
请求的参数中的值可以是一个json字符串
*/
app.use(bodyParser.urlencoded({extended:false}))
app.use(Express.static(path.join(__dirname,'public')))
app.post('/login',(req,res)=>{
    console.log('1:',req.query)
    console.log('2:',req.body)

    res.send('登录成功')
})
app.listen(8888)