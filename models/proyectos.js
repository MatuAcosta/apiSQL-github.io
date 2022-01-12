const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('proyectos', {
    idProyectos: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(400),
      allowNull: true
    },
    cliente: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    fecha_inicio: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    fecha_fin: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    horas_total: {
      type: DataTypes.TIME,
      allowNull: true
    },
    presupuesto: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    idJefe: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'jefe',
        key: 'idJefe'
      }
    }
  }, {
    sequelize,
    tableName: 'proyectos',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "idProyectos" },
        ]
      },
      {
        name: "fk_Proyectos_Jefe1_idx",
        using: "BTREE",
        fields: [
          { name: "idJefe" },
        ]
      },
    ]
  });
};
