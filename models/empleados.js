const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('empleados', {
    idEmp: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombreEmp: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    descripEmp: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    aniosExp: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    titulo: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    direccion: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'empleados',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idEmp" },
        ]
      },
    ]
  });
};
