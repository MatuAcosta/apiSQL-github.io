const {verifySignUp} = require ('../middlewares/index')
const controller = require ('../controllers/auth.controller')
const express = require('express')
const router = express.Router();

router.post('/signin',(req,res)=>{ 
    controller.signIn(req,res)
})
router.post('/signup',[verifySignUp.checkUserExist,verifySignUp.checkRolExisted],
    controller.signUp)


module.exports = router