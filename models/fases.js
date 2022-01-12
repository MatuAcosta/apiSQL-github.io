const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('fases', {
    nroSecuencia: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    idProyectos: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'proyectos',
        key: 'idProyectos'
      }
    },
    estado: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    fechaInicio: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    fechaFin: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    nombre: {
      type: DataTypes.STRING(45),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'fases',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "nroSecuencia" },
          { name: "idProyectos" },
        ]
      },
      {
        name: "fk_Fases_Proyectos1_idx",
        using: "BTREE",
        fields: [
          { name: "idProyectos" },
        ]
      },
    ]
  });
};
