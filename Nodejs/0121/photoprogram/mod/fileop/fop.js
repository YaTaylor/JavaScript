/* 文件操作*/
const path = require('path')
const fs = require('fs')

// 判断文件是否存在
function check_file(fp){
    return fs.existsSync(fp)

}

// 判断目录是否存在
function check_dir(fp){

}

/*cb */
function callBack(){

}


/* fp = file path */
function f_open(fp){
    let f_path = path.join(__dirname,fp)
    // 判断当前文件或者文件夹是否存在
    // check_file(f_path,callBack)
    let res = check_file(f_path)
    if (res) {
        // 文件存在
    } else {
        // 文件不存在
    }
}

/* 读取文件 */
function f_read(fp,cb){
    let f_path = path.join(process.cwd(),fp)
    // 同步判断
    let res = check_file(f_path)
    if(res){
        // 异步读取
        fs.readFile(fp,(err,data)=>{
            if(err){
                throw err
            }else{
                // 如何把结果传出去
                // 因为这是异步
                // console.log(data.toString)
                cb(data.toString())
                

            }

        })
    }else{
        throw  `${f_path} 不存在`
    }
}

module.exports = {
    fopen:f_open,
    fread:f_read
}
