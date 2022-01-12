const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('involucrados', {
    idProductos: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'productos',
        key: 'idProductos'
      }
    },
    idInformatico: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'informaticos',
        key: 'idInformatico'
      }
    },
    horasProd: {
      type: DataTypes.TIME,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'involucrados',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idProductos" },
          { name: "idInformatico" },
        ]
      },
      {
        name: "fk_Productos_has_Informaticos_Informaticos1_idx",
        using: "BTREE",
        fields: [
          { name: "idInformatico" },
        ]
      },
      {
        name: "fk_Productos_has_Informaticos_Productos1_idx",
        using: "BTREE",
        fields: [
          { name: "idProductos" },
        ]
      },
    ]
  });
};
