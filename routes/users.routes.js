const {authJwt} = require("../middlewares/index");
const express = require('express');
const router = express.Router();
const controller = require('../controllers/user.controller')


router.get('/admin',[authJwt.verifyToken,authJwt.isAdmin],controller.adminBoard)

module.exports = router