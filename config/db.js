
const { Sequelize,DataTypes,Model,Op } = require('sequelize');
const sequelize = new Sequelize('gestionproyectos', 'root', 'olakase123', {
  host: 'localhost',
  dialect: 'mysql'
});

const db = {} 
db.Sequelize = Sequelize; 
db.sequelize = sequelize
db.Model = Model 
db.DataTypes = DataTypes
db.ROLES = ["admin","moderador","user"]
db.Op = Op

db.sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = db