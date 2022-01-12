const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('productos', {
    idProductos: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    descripcion: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    idAnalista: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'analistas',
        key: 'idAnalista'
      }
    },
    estado: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'productos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idProductos" },
        ]
      },
      {
        name: "fk_Productos_Analistas1_idx",
        using: "BTREE",
        fields: [
          { name: "idAnalista" },
        ]
      },
    ]
  });
};
