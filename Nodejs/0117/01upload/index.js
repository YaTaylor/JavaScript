const Express = require('express')
const bodyParser = require('body-parser')
const path = require('path')


// 获取文件上传的第一步是：导入 第三方模块  multer
/* multer 它是用于构建和处理 文件上传的中间件
作用是用来获取上传的文件内容，对内容进行存储操作
*/
const multer = require('multer')
const app = Express()



app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
app.use(Express.static(path.join(__dirname,'public')))
app.use(Express.static(path.join(__dirname,'sources')))
// app.use(multer({ dest: '/sources/'}).array('pictres'));



// 第二步：配置 存储属性
const storage = multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,path.resolve('sources/pictres'))
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now() + path.extname(file.originalname))
    }
})

// 第三步：将配置好的属性 应用到服务中
const upload = multer({storage:storage})

// 第四步：指定 POST 请求的上传属性 也就是说上传功能应用到哪个
app.post('/upload',upload.single('files'),(req,res)=>{
    console.log(req.body)
    res.send('上传成功')
})

app.listen(9000)
