/*
题目：将一段英文语句进行逆序次序输出
例如：I'm a code.   最终输出的是  code. a I'm
要求：不能使用 split、indexOf、search(尽量不使用字符的原生方法)

*/
// 2.4 实现查找方法  返回值就是 找到的下标
function index_of(src,subsrc){

    if(!src){
        return
    }

    for(let i = 0;i < src.length ; i++){
        // 先从第一位找起，找到第一位开头与指定字符串一样的位置，用变量接收，再对比后面的是否一样
        if(src[i] == subsrc[0]){
            let j = i
            // 第一位相同后，再对比后几位
            // 循环正常执行，说明找到了子串匹配的位置
            for(let k = 0 ; k < subsrc.length ; k++){
                // 如果不相同，打破本次循环
                if(src[j] != subsrc[k]){
                    break
                }
                j = j+1    
            }
            return i
        }
    }
    return -1

}

// 2.3 进行分割
function my_split(src,substr){
    // 定义一个容器数组，用来存储 最终的分割结果
    let temp = []
    // 要明确字符串的长度
    let src_len = src.length
    let substr_len = substr.length

    for(let i = 0 ; i < src_len;i++){
        // 要找出现 指定字符或者字符串的第一的位置
        // 要在这里实现一个 indexOf 方法
        let index = index_of(src,substr)
        console.log('find:',index)
        if(index = -1){
            return temp
        }else{
            temp.push(src.substr(0,index))
            src = src.substr(index+substr_len)
            console.log(temp,src)
        }

    }
}

// 2.1次序
function word_reverse(src){
    // 2.2 对src 进行分割
    let substr = ' '
    let res = my_split(src,substr)
    console.log(res)
}

// 1.1 实现逆序
function my_reverse(src){
    // 代码的完整性 首先判断是否存在
    if (!src){
        return 
    }
    let temp = ''
    // 然后将字符串倒序组成一个新的字符串
    for(let i = src.length - 1 ; i >= 0;i--){
        temp += src[i]
    }
    return temp
}

// 思路：先逆序 再正序 最后输出 所有环节均由自己自定义函数
function show(string){
    // 1.逆序
    let rever_str = my_reverse(string)
    console.log(rever_str)
    let word_str = word_reverse(rever_str)
    // console.log(word_str)

    // 2.次序

    // 3.输出

}


let src = 'I\'m a code.'
show(src)