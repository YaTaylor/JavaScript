var res = 'I have a little dream' 
// dream little a hava I

a = res.split(' ')
var lis = []
b = ''
for(var i = 0; i < a.length;i++){
    // console.log(a[a.length - i - 1])
    lis.push(a[a.length - i - 1])
}
// console.log(lis)

for(var j in lis){
    b = b + lis[j] + ' '
}
// trim()   移除字符串首位空白
console.log(b.trim())


