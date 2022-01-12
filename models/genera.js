const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('genera', {
    nroSecuencia: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'fases',
        key: 'nroSecuencia'
      }
    },
    idProyectos: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'fases',
        key: 'idProyectos'
      }
    },
    idProductos: {
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
    tableName: 'genera',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "nroSecuencia" },
          { name: "idProyectos" },
          { name: "idProductos" },
        ]
      },
      {
        name: "fk_Fases_has_Productos_Productos1_idx",
        using: "BTREE",
        fields: [
          { name: "idProductos" },
        ]
      },
      {
        name: "fk_Fases_has_Productos_Fases1_idx",
        using: "BTREE",
        fields: [
          { name: "nroSecuencia" },
          { name: "idProyectos" },
        ]
      },
    ]
  });
};
