const router = require('express').Router()
const scrapperController = require("../controllers/scrapper.controller")
const auth = require("../middleware/auth");

router.post("/scrapeImg", auth, scrapperController.scrapeImg)


module.exports= router