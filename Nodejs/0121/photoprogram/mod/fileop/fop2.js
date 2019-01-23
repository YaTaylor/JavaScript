/* 封装文件操作模块 */
const  fs = require('fs')
const path = require('path')

// 拼接全路径
function full_path(fp){
    console.log('222',process.cwd())
    return path.join(process.cwd(),fp)
}


// 是否是文件
function is_file(fp,cb){
    // 2.异步判断文件是否存在
    fs.exists(fp,function(exists){
        // exists true 表示是文件
        cb(exists)
    })
}

function f_read(fp,cb){
    fp = full_path(fp)
    // 1.判断是否是文件
    is_file(fp,function(res){
        if(res){
            // 3.读取文件
            fs.readFile(fp,function(err,data){
                console.log('data111',data)
                if(err) throw err
                // console.log(data.toString())
                cb(null,data.toString())
            })

        }else{
            console.log('文件不存在')
            cb(res,null)
        }

    })
}

// 写文件
function f_write(fp,info,cb){
    fp = full_path(fp)
    console.log('11111',fp)
    is_file(fp,function(res){
        if(res){
            fs.readFile(fp,function(err,data){
                if(err){
                    throw err
                }
                // 将json字符串转化为一个对象
                // toString() 方法可把一个 Number 对象转换为一个字符串，并返回结果。
                let obj = data.toString()
                // '' null
                // JSON.parse() 方法用于将一个 JSON 字符串转换为对象。
                if(obj != '' || obj != null){
                    obj = JSON.parse(obj)
                    if(obj.hasOwnProperty('users')){
                        obj['users'].push(info)
                    }else{
                        obj['users'] = []
                        obj['users'].push(info)
                    }

                    // 对象变成字符串
                    obj = JSON.stringify(obj)
                    fs.writeFile(fp,obj,(err)=>{
                        if(err){
                            throw err
                        }
                        cb(null,'写入成功')
                    })

                }else{
                    console.log('没有内容')
                    cb(null,'没有内容')
                }
            })

        }else{
            cb(res,'文件不存在111')
        }
    })
}

/* 修改用户信息
1.用户查找
2，用户信息修改
3.保存
*/
function f_edit(fp,info,cb){

}


// let info = {
//     uname:'Jack',
//     uage:18
// }

// f_write('./users.json',info,function(err,res){
//     if(err){
//         throw err
//     }else{
//         console.log(res)
//     }
// })

// 读取用户目录
// dp = dir path
// eg: sources/users/
function r_dir(dp,cb){
    dp = full_path(dp)
    // 判断目录是否存在
    fs.readdir(dp,(err,files)=>{
        if(err){
            cb(true,null)
        }cb(null,files)
    })


}
module.exports = {
    fread: f_read,
    fwrite:f_write,
    rfiles:r_dir
}