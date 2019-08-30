const express = require('express')
const router = express.Router()

const Game = require('../controller/Game')

router.get('/games', Game.Games)
router.post('/addGame', Game.addGame)
router.delete('/delGame/:id', Game.delGame)
router.get('/editGame/:id', Game.editGame)
router.put('/updateGame/:id', Game.updateGame)
router.get('/searchPlatform/:platform', Game.searchPlatform)
router.get('/searchName/:name', Game.searchName)
router.get('/searchCreator/:creator', Game.searchCreator)
router.get('/searchTool/:developTool', Game.searchTool)
router.get('/searchLanguage/:language', Game.searchLanguage)

module.exports = router


//router