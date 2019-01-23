// 作业 查找指定字符串中出现最多的字母,并统计出现的次数
// 比如 aabcaabcdddac


var a_string = 'aabcaabcdddac'

// var new_a = new Set(a_string)
// console.log(new_a)
// console.log(typeof(new_a))
// console.log(new_a.length)

// function quchong(str){
//     var newStr="";
// 	for(var i=0;i<str.length;i++){
// 		if(newStr.indexOf(str[i])==-1){
//             newStr+=str[i];
// 		}
//     }
//     return newStr;
// }
// newStr = quchong(a_string)
// console.log('***********')
// // console.log(newStr)
// var n = 0
// for(var i in newStr){
//     // console.log(newStr[i])
//     for (var j in a_string){
//         if (newStr[i] == a_string[j]){
//             n++
//             console.log(newStr[i],n)
//         }
//     }

// }


 //用法

 /*这个字符串中的每个字每出现了多少次*/
var ary = "aab  caabc  dddac A";
var obj = {};
var i = 0;

ary1 = ary.toLocaleLowerCase(); //将字符串转为小写

for(i = 0; i < ary1.length; i++)
{
    key = ary1[i];
    console.log('key',key)
    console.log(obj[key])
    if(obj[key])
    {
        //对象中有这个字母
        obj[key]++;
    }
    else
    {
        //对象中没有这个字母,把字母加到对象中
        obj[key] = 1;
    }
}
console.log(obj)

// for(var key in obj) //遍历这个对象
// {
//     console.log(key + "这个字母出现了" + obj[key] + "次");
// }
// console.log("字典元素按value值排序: ");
// var res2 = Object.keys(obj).sort(function(a,b){ return obj[a]-obj[b]; });
// console.log()
// for(var key in res2){
//     console.log("key: " + res2[key] + " ,value: " + obj[res2[key]]);
// }












