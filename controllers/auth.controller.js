const db = require ('../config/db')
const initModels = require("../models/init-models")
const models = initModels(db.sequelize);
const config = require('../config/auth.config')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const signUp = async (req,res)=> { 

    try {
        const newUser = await models.users.create({
            username:req.body.username,
            email:req.body.email,
            password: bcrypt.hashSync(req.body.password,8)
        })
        if (req.body.roles) { 
            try {
                const roles = await models.roles.findAll({
                    where: {
                        name: {
                            [db.Op.or]: req.body.roles
                        }
                    }
                })
                roles.forEach( async rol => {
                    try {
                        //deberia haber otra forma con setUserRoles pero no puedo solucionarlo por ahora
                        const seteo = await models.userrole.create({
                            idRole: rol.id,
                            idUser: newUser.userId
                        })
                        if(!seteo) throw error
                    } catch (error) {  
                        console.log(error)
                        
                    }
                });
               
                let token = jwt.sign({id:newUser.userId},config.secret, { expiresIn:86400})
                return res.send({message:'usuario registrado con roles'})
            } catch (error) {
                console.log('Error',error)
                return res.send('registrado')
            }
            
        }else { 
            try {
                const seteo = await models.userrole.create({
                    idRole: 1,
                    idUser: newUser.userId
                });                
                let token = jwt.sign({id:newUser.userId},config.secret, { expiresIn:86400})
                return res.send({message:'usuario registrado sin roles'})
 
            } catch (error) {
                console.log(error)
            }
        }

    } catch (error) {
        console.log(error)
    }

}

const signIn = async (req,res) => { 
    try {
        const findUser = await models.users.findOne({
            where:{
                [db.Op.and]: [
                    {username: req.body.username},
                    {email:req.body.email}
                ]
            }
        })  
        if (!findUser) throw {message:"Revisar username o email"}
        let passwordIsValid = bcrypt.compareSync(req.body.password,findUser.password)
        if (!passwordIsValid) return res.status(400).send({message:"error de contrasenia"});
        let token = jwt.sign({id:findUser.userId},config.secret, { expiresIn:86400})
        let authorities = [] 
        try {
            const roles = await findUser.getUserroles();
            roles.forEach(async rol => {
                const role = await models.roles.findByPk(rol.idRole)
                authorities.push((role.name))
            });
            return   res.status(200).send({
                id: findUser.idUser,
                username: findUser.username,
                email: findUser.email,
                roles: authorities,
                accessToken: token
              });
        } catch (error) {
            console.log(error)
        }
    } catch (error) {
        res.status(404).send(error)
        console.log(error)
    }
    

}

module.exports = {signIn,signUp}