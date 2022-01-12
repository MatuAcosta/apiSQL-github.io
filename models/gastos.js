const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gastos', {
    idGastos: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    importe: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    tipo: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    idProyecto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'asigna',
        key: 'idProyecto'
      }
    },
    idEmp: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'asigna',
        key: 'idEmp'
      }
    }
  }, {
    sequelize,
    tableName: 'gastos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idGastos" },
        ]
      },
      {
        name: "fk_Gastos_Asigna1_idx",
        using: "BTREE",
        fields: [
          { name: "idProyecto" },
          { name: "idEmp" },
        ]
      },
    ]
  });
};
