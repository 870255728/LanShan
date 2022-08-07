const express = require('express')
const Things = require('./Things.js')

const router = express.Router()

router.get('/', (req, res) => {
    // 获取信息列表
    Things.read((err, array) => {
        if (err) {
            res
                .sendStatus(500)
                .send('SERVE ERROR')
        }
        else {
            // console.log(array)
            res.render('index.html', { array })
        }
    })
})

// 渲染添加页面
router.get('/things/create', (req, res) => {
    res.render('Create.html')
})

// 添加信息
router.post('/things/create', (req, res) => {
    // 添加保存信息
    Things.save(req.body, (err) => {
        if (err) {
            res
                .sendStatus(500)
                .send('SERVE ERROR')
        }
        else {
            res.redirect('/')
        }
    })
})

// 渲染编辑页面
router.get('/things/edit', (req, res) => {
    // 根据id进行查找
    Things.editById(parseInt(req.query.id), (err, things) => {
        if (err) {
            res
                .sendStatus(500)
                .send('SERVE ERROR')
        }
        else {
            res.render('Edit.html', {
                things
            })
        }
    })
})

// 提交编辑学生页面
router.post('/things/edit', (req, res) => {
    // console.log(req.body)
    Things.updateById(req.body, (err) => {
        if (err) {
            res
                .sendStatus(500)
                .send('SERVE ERROR')
        }
        else {
            res.redirect('/')
        }
    })
})

// 删除信息
router.get('/things/delete', (req, res) => {
    Things.deleteById(req.query.id, (err) => {
        if (err) {
            res.sendStatus(500).send('SERVER ERROR')
        }
        else {
            res.redirect('/')
        }
    })
})

module.exports = router 
