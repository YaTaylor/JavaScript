const fs = require('fs')
fs.open('./input.txt', 'a+', (err, fd) => {
    if (err) {
        throw err
    }
    fs.readFile(fd, (err, data) => {
        if (err) {
            throw err
        }
        // console.log(data.toString())/
        fs.writeFile(fd, 'hello world', (err) => {
            if (err) {
                throw err
            }
            console.log('写入成功')
        })

    })
})