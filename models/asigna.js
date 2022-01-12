const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('asigna', {
    idProyecto: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'proyectos',
        key: 'idProyectos'
      }
    },
    idEmp: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'empleados',
        key: 'idEmp'
      }
    },
    horasDedicadas: {
      type: DataTypes.TIME,
      allowNull: true
    },
    costePart: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'asigna',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idProyecto" },
          { name: "idEmp" },
        ]
      },
      {
        name: "fk_Proyectos_has_Empleados_Empleados1_idx",
        using: "BTREE",
        fields: [
          { name: "idEmp" },
        ]
      },
      {
        name: "fk_Proyectos_has_Empleados_Proyectos_idx",
        using: "BTREE",
        fields: [
          { name: "idProyecto" },
        ]
      },
    ]
  });
};
