const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('corresponde', {
    nroSecuencia: {
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
    idRecurso: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'recursos',
        key: 'idRecurso'
      }
    },
    periodoRec: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'corresponde',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "nroSecuencia" },
          { name: "idProyectos" },
          { name: "idRecurso" },
        ]
      },
      {
        name: "fk_Fases_has_Recursos_Recursos1_idx",
        using: "BTREE",
        fields: [
          { name: "idRecurso" },
        ]
      },
      {
        name: "fk_Fases_has_Recursos_Fases1_idx",
        using: "BTREE",
        fields: [
          { name: "nroSecuencia" },
          { name: "idProyectos" },
        ]
      },
    ]
  });
};
