const db = require('../config/db')
const initModels = require("../models/init-models")
const models = initModels(db.sequelize);
const roles = ["admin","moderador","user"]

const checkUserExist = async (req,res,next)=>  {
    try {
        const user = await models.users.findOne(
            {
                where: {
                    username: req.body.username
                }
            }
        )
        const email = await models.users.findOne({
            where: { 
                email: req.body.email
            }
        })
        if(!(user) || !(email)) throw  {message:'error'}
        return res.status(401).send({message:'este usuario ya existe'})
    } catch (error) {
        console.log(error)
        next()
    }
    
}

const checkRolExisted = (req,res,next) => {
    if (req.body.roles) { 
        req.body.roles.forEach(rol => {
            if(!db.ROLES.includes(rol)) return  res.status(400).send({message:'error'})
        });
    }
    next();
}

const verify = { 
    checkUserExist,
    checkRolExisted
}

module.exports = verify