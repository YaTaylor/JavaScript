import { callbackify } from "util";

const b = require('./2/b')


function sayHi(msg){
    console.log(msg)
}
function sayHi2(msg){
    console.log(msg)
}

// b.js 函数调用
// callback()


// sum求和



var obj = {}
obj.sum = function (a,b){
    let sum = a + b
    return sum
}
