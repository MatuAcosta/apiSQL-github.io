const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('relacionado', {
    idProyect: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'proyectos',
        key: 'idProyectos'
      }
    },
    idProyRelaciona: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'proyectos',
        key: 'idProyectos'
      }
    },
    PalabraClave: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'relacionado',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idProyect" },
          { name: "idProyRelaciona" },
        ]
      },
      {
        name: "fk_Proyectos_has_Proyectos_Proyectos2_idx",
        using: "BTREE",
        fields: [
          { name: "idProyRelaciona" },
        ]
      },
      {
        name: "fk_Proyectos_has_Proyectos_Proyectos1_idx",
        using: "BTREE",
        fields: [
          { name: "idProyect" },
        ]
      },
    ]
  });
};
