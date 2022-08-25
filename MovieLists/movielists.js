const express = require('express')
const router = express.Router()
const Movielist = require('../models/movielist')

//get
router.get('/', async (req, res) => {
    try {
        const movielists = await Movielist.find()
        res.json(movielists)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})
//get with id
router.get('/:id', (req, res) => {

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