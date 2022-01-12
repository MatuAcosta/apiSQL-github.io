const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('jefe', {
    idJefe: {
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
    tableName: 'jefe',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idJefe" },
        ]
      },
    ]
  });
};
