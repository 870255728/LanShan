const fs = require('fs')
const path = './database/db.json'

//查询所有信息
exports.read = (callback) => {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            return callback(err)
        }
        else {
            return callback(null, JSON.parse(data).things)
        }
    })
}

// 保存信息
exports.save = (stuObj, callback) => {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            return callback(err)
        }
        else {
            let things = JSON.parse(data).things
            stuObj.id = parseInt(things[things.length - 1].id) + 1
            things.push(stuObj)
            newData = {
                things: things
            }
            fs.writeFile(path, JSON.stringify(newData), (err) => {
                if (err) {
                    return callback(err)
                }
                else {
                    return callback(null)
                }
            })
        }
    })
}

// 更改信息
exports.updateById = (stuObj, callback) => {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            return callback(err)
        }
        else {
            let things = JSON.parse(data).things
            let newStuObj = things.find((item) => {
                return item.id == stuObj.id
            })
            for (let i in stuObj) {
                newStuObj[i] = stuObj[i]
            }
            things = {
                "things": things
            }
            fs.writeFile(path, JSON.stringify(things), (err) => {
                if (err) {
                    return callback(err)
                }
                else {
                    return callback(null)
                }
            })
        }
    })
}

// 编辑信息界面
exports.editById = (id, callback) => {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            return callback(err)
        }
        else {
            let things = JSON.parse(data).things
            let result = things.find((i) => i.id == id)
            callback(null, result)
        }
    })
}

// 删除信息
exports.deleteById = (id, callback) => {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            return callback(err)
        }
        else {
            let things = JSON.parse(data).things
            let index = things.findIndex((item) => {
                return item.id == id
            })
            things.splice(index, 1)
            things = {
                things
            }
            fs.writeFile(path, JSON.stringify(things), (err) => {
                callback(err)
            })
        }
    })
}
