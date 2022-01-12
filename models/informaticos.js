const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('informaticos', {
    matricula: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idInformatico: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'empleados',
        key: 'idEmp'
      }
    }
  }, {
    sequelize,
    tableName: 'informaticos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idInformatico" },
        ]
      },
    ]
  });
};
