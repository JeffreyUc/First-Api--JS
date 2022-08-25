const express = require('express')
const router = express.Router()

//get
router.get('/', (req, res) => {
    res.send(console.log('check'))
})
//get with id
router.get('/id', (req, res) => {

})
//post
router.post('/', (req, res) => {

})
//put
router.patch('/id', (req, res) => {

})
//delete
router.delete('/id', (req, res) => {

})

module.exports = router