const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('prototipo', {
    idPrototipo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'productos',
        key: 'idProductos'
      }
    },
    version: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    ubicacion: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'prototipo',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idPrototipo" },
        ]
      },
    ]
  });
};
