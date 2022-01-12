const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('infometecnico', {
    idInforme: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'productos',
        key: 'idProductos'
      }
    }
  }, {
    sequelize,
    tableName: 'infometecnico',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idInforme" },
        ]
      },
    ]
  });
};
