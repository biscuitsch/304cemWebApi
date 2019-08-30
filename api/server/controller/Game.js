const cmodel = require('../db/gamedb.js')

const Games = (req, res) => {
  cmodel.Game.find({}, (err, games) => {
    if (err) console.log(err)
    res.send(games)
  }).sort({ 'platform': -1 })
}

const addGame = (req, res) => {
  let game = new cmodel.Game(req.body)
  game.save()
    .then(() => {
      res.status(200).json({ 'game': 'game is added successfully' })
    })
    .catch(() => {
      res.status(400).send('unable to save to database')
    })
}

const delGame = (req, res) => {
  cmodel.Game.findOneAndRemove({ _id: req.params.id }, err => {
    if (err) console.log(err)
    res.json({
      success: true
    })
  })
}

const editGame = (req, res) => {
  let id = req.params.id
  cmodel.Game.findById(id, (err, game) => {
    if (err) {
      res.json(err)
    }
    res.json(game)
  })
}

const updateGame = (req, res) => {
  cmodel.Game.findById(req.params.id, (err, game) => {
    if (!game) {
      res.status(err).send('data is not found')
    } else {
      game.platform = req.body.platform
      game.name = req.body.name
      game.creator = req.body.creator
      game.developTool = req.body.developTool
      game.description = req.body.description
      game.mode = req.body.mode
      game.language = req.body.language
      game.remark = req.body.remark
      game.save().then(() => {
        res.json('Update complete')
      })
        .catch(() => {
          res.status(err).send('unable to update the database')
        })
    }
  })
}

const searchPlatform = (req, res) => {
  cmodel.Game.find({ platform: { $regex: req.params.platform } }, (err, game) => {
    if (err) {
      res.json(err)
    }
    res.send(game)
  })
}

const searchName = (req, res) => {
  cmodel.Game.find({ name: { $regex: req.params.name } }, (err, game) => {
    if (err) {
      res.json(err)
    }
    res.send(game)
  })
}

const searchCreator = (req, res) => {
  cmodel.Game.find({ creator: { $regex: req.params.creator } }, (err, game) => {
    if (err) {
      res.json(err)
    }
    res.send(game)
  })
}

const searchTool = (req, res) => {
  cmodel.Game.find({ developTool: { $regex: req.params.developTool } }, (err, game) => {
    if (err) {
      res.json(err)
    }
    res.send(game)
  })
}

const searchLanguage = (req, res) => {
  cmodel.Game.find({ language: { $regex: req.params.language } }, (err, game) => {
    if (err) {
      res.json(err)
    }
    res.send(game)
  })
}

module.exports = { Games, addGame, editGame, updateGame, delGame, searchPlatform, searchName, searchCreator, searchTool, searchLanguage }
