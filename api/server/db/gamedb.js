const mongoose = require('mongoose')

var gameSchema = mongoose.Schema({
  platform: String,
  name: String,
  creator: String,
  developTool: String,
  description: String,
  mode: String,
  language: String,
  remark: String
})

var gameModel = { Game: mongoose.model('Game', gameSchema) }

module.exports = gameModel
