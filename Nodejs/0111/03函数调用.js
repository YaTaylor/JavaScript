// 声明一个函数
function sum(a,b){
    return a+b
}

var ret = sum(1,1)
console.log(ret)

// 调用文件外的js文件
// require() 引入、导入一个模块 js文件  模块(功能函数)
var sayHi2 = require('./index.js')  //require('./index')
sayHi2('hello node js!!!')

var says = require('./index01')
// says.sBB('1111111111')
// says.sH('3333333333')
says.sayBye('11111')
says.sayHello('22222')

