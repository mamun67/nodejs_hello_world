var express=require("express");
var router=express.Router();

var getDataService = require('../services/getData.js');

router.post("/getData", getDataService.getData);

module.exports = router;