const db = require('../config/db')
const initModels = require("../models/init-models")
const models = initModels(db.sequelize);

class proyController { 

    async getAll (req,res) { 
        try {
            const emp = await models.proyectos.findAll({})
            const resp =  JSON.parse(JSON.stringify(emp))
            res.json(resp)
        } catch (error) {
            console.log(error)
        }
    }

    async getOne (req,res) { 
        try {
            const emp = await models.proyectos.findAll({
                where: {
                    idProyectos:req.params.id
                }
            })
            res.json(emp)
        } catch (error) {
            console.log(error)
        }
    }

    async update (req,res) { 
        try {
            let data = req.body 
            const empUpdate = await models.proyectos.update(data,{
                where: { 
                    idProyectos: req.params.id
                }
            })
            res.redirect('https://www.google.com/')
        } catch (error) {
            console.log(error)
        }
    } 

    async delete (req,res) { 
        try {
            const deleted = await models.proyectos.destroy({
                where:{
                    idProyectos:req.params.id
                }
            })
        } catch (error) {
            console.log(error)
        }
    }

    async create (req,res) { 
        
    }

}


module.exports = proyController