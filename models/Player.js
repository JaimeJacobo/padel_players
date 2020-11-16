  
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const playerSchema = new Schema({
  name: {type: String},
  lastName: {type: String},
  ranking: {type: Number},
  position: {type: String},
  nationality: {type: String},
  brand: {type: String}
})

const Player = mongoose.model('Player', playerSchema)

module.exports = Player