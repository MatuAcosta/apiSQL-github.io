const jwt = require ('jsonwebtoken');
const db = require ('../config/db')
const initModels = require("../models/init-models")
const models = initModels(db.sequelize);
const config = require('../config/auth.config');

const verifyToken = (req,res,next) => { 
    let token = req.headers["x-access-token"]
    if(!token) return res.status(403).send({message:'No token provided'})
    
    jwt.verify(token,config.secret,(err,decoded)=> { 
        if (err) return res.status(403).send({message:"No autorizado"})
        req.userId = decoded.id; 
        next()
    })
}


const isAdmin = async (req,res,next) => { 
    const user = await models.users.findByPk(req.userId)
    const roles = await user.getUserroles(); 
    roles.forEach(rol => {
        console.log(rol)
        if(rol.name === 'admin'){
            next() 
            return;
        } 

    return res.status(403).send({message:'No es admin'})
    });
}


const authJWT = {verifyToken,isAdmin}
module.exports = authJWT