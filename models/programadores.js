const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('programadores', {
    lenguaje: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    idProgramador: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'informaticos',
        key: 'idInformatico'
      }
    }
  }, {
    sequelize,
    tableName: 'programadores',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idProgramador" },
        ]
      },
    ]
  });
};
