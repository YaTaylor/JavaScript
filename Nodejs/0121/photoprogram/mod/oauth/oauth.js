/* 用于处理用户验证 */
const fop = require('../fileop/fop2')

function checkUserName(uname,allusers,cb){

}

function checkUserPasswd(upwd,allusers,cb){

}



// users.txt
function oauth_user(user_info,cb){
    // 读取文件
    // fop.fread('')
    // 获取当前 程序运行的根目录
    // console.log(__dirname)
    // // 获取当前 程序运行的根目录
    // console.log(process.cwd)
    // console.log(path.dirname(require.main.filename))
    // console.log(__filename)
    // console.log(path.dirname(__filename))
    // console.log(require.main.filename)
    fop.fread('sources/users.json',function(err,data){
        // 对 data 进行 user_info
        console.log('333',data)
        console.log(typeof JSON.parse(data))

        if(err){
            cb(err,null)
        }
        if((typeof JSON.parse(data)) == (typeof JSON.parse('{}'))){
            let obj = JSON.parse(data)
            let flag = false
            if(obj.hasOwnProperty('users')){
                let users = obj['users']
                for(let i=0;i<users.length;i++){
                    let item = users[i]
                    if(item['uname'] == user_info['uname']){
                        // 找到用户
                        // cb(null,true)
                        flag = true
                        break
                    }
                }
                if(flag){
                    // 找到用户
                    cb(null,true)
                }else{
                    // 没找到
                    cb(null,false)
                }
                
            }else{
                cb(null,false)
            }
        }else{
            cb(null,null)
        }
    })


}
function oauth_add(user,cb){
    fop.fwrite('sources/users.json',user,function(err,msg){
        if(err){
            cb(err,null)
        }
        cb(null,msg)
    })
}

// 验证用户姓名
function oauth_login(user_info,cb){
    fop.fread('sources/users.json',function(err,data){
        // 对 data 进行 user_info
        console.log('333',data)
        console.log(typeof JSON.parse(data))

        if(err){
            cb(err,null)
        }
        if((typeof JSON.parse(data)) == (typeof JSON.parse('{}'))){
            let obj = JSON.parse(data)
            let flag = false
            if(obj.hasOwnProperty('users')){
                let users = obj['users']
                for(let i=0;i<users.length;i++){
                    let item = users[i]
                    if(item['uname'] == user_info['uname']){
                        // 找到用户
                        // cb(null,true)
                        if(item['upwd'] == user_info['upwd']){
                            flag = true
                            break
                        }else{
                            flag = false
                        }
                      
                    }
                }
                if(flag){
                    // 找到用户
                    cb(null,true)
                }else{
                    // 没找到
                    cb(null,false)
                }
                
            }else{
                cb(null,false)
            }
        }else{
            cb(null,null)
        }
    })
}

function oauth_add(user,cb){
    fop.fwrite('sources/users.json',user,function(err,msg){
        if(err){
            cb(err,null)
        }
        cb(null,msg)
    })
}

function get_user_files(user,cb){
    fop.rfiles('sources/users/'+ user.dirname,function(err,files){
        if(err){
            cb(true,null)
        }
        cb(null,files)
    })
}



module.exports = {
    oauth: oauth_user,
    add: oauth_add,
    login:oauth_login,
    files:get_user_files


}