
function setCookie(cname,cvalue,exdays){
    let date = new Date()
    date.setTime(date.getTime() + exdays*24*60*60*1000)
    console.log(date)
    // 设置cookie时效
    let expires = "expires=" + date.toGMTString() 
    document.cookie = cname + "=" + cvalue + "; " + expires
}


function getCookie(cname){
    let ca = document.cookie.split(';')
    for(let i = 0;i<ca.length;i++){
        let item = ca[i].trim()
        let items = item.split('=')
        if(items[0] == cname){
            return items[1]

        }
    }
    return ''
}
console.log(getCookie('uid')) 

function deleteCookie(cname){
    setCookie(cname,'',0)
}
deleteCookie('uid')
