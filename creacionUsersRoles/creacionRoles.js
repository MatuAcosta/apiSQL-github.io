const db = require('../config/db')
const initModels = require("../models/init-models")
const models = initModels(db.sequelize);

const creacion = async () => {
    try {
        const primero = await models.roles.create({id:1,name:'user'});
        const segundo =await models.roles.create({id:2,name:'moderador'});
        const tercero =await models.roles.create({id:3,name:'admin'});       
    } catch (error) {
        console.log(error)
    }
 

}
module.exports = creacion