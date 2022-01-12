const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('analistas', {
    idAnalista: {
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
    tableName: 'analistas',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idAnalista" },
        ]
      },
    ]
  });
};
