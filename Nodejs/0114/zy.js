// 1.作业1 能否封装一个 关于文件操作的 自定义模块
// 文件操作的其它API

// 判断是否是 文件或者是目录
fs.stat('./input.txt',(err,stats)=>{
    if(err){
        throw err
    }
    if(stats.isFile){
        // 是文件
        console.log('是文件')
    }else if(stats.isDirectory){
        // 是目录
        console.log('是目录')
    }
})


// 创建目录
// fs.mkdir('./myfloder/',err=>{
//     if(err){
//         throw err
//     }
// })
// 删除目录
// fs.rkdir('./myfloder',err=>{
//     if(err){
//         throw err
//     }
// })
// 读取一个文件夹
// fs.readdir('./homework/',(err,files)=>{
//     if(err){
//         throw err
//     }
//     console.log(files)
// })

// // 删除文件
// fs.unlink('./homework/1122/1.js/',err=>{
//     if(err){
//         throw err
//     }
// })