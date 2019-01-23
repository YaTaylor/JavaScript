function sayHi(msg){
    console.log(msg)
}

function sayBye(msg){
    console.log(msg)
}
function callBack(fn,msg){
    fn(msg)
}

callBack(sayHi,'hello')

// 回调的典型方式：是将函数名作为参数进行传递 在需要的时候进行调用