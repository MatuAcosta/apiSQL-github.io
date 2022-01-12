const express = require('express')
const router = express.Router();
const proyController = require('../controllers/proyectos-controller')
const controller = new proyController()


router.get('/', controller.getAll)
router.get('/:id',controller.getOne)
router.put('/:id',controller.update)
router.delete('/:id',controller.delete)
//router.post('/',proyController.create)
module.exports = router

