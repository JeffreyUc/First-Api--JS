const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    director: {
        type: String,
        required: true
    },
    movieGenre: {
        type: String,
        required: true
    },
    ageRating:{
        type: Number,
        required: false
    }
})


module.exports = mongoose.model('movielist', movieSchema)