var DataTypes = require("sequelize").DataTypes;
var _analistas = require("./analistas");
var _asigna = require("./asigna");
var _corresponde = require("./corresponde");
var _empleados = require("./empleados");
var _fases = require("./fases");
var _gastos = require("./gastos");
var _genera = require("./genera");
var _infometecnico = require("./infometecnico");
var _informaticos = require("./informaticos");
var _involucrados = require("./involucrados");
var _jefe = require("./jefe");
var _productos = require("./productos");
var _programadores = require("./programadores");
var _prototipo = require("./prototipo");
var _proyectos = require("./proyectos");
var _recursos = require("./recursos");
var _relacionado = require("./relacionado");
var _roles = require("./roles");
var _software = require("./software");
var _userrole = require("./userrole");
var _users = require("./users");

function initModels(sequelize) {
  var analistas = _analistas(sequelize, DataTypes);
  var asigna = _asigna(sequelize, DataTypes);
  var corresponde = _corresponde(sequelize, DataTypes);
  var empleados = _empleados(sequelize, DataTypes);
  var fases = _fases(sequelize, DataTypes);
  var gastos = _gastos(sequelize, DataTypes);
  var genera = _genera(sequelize, DataTypes);
  var infometecnico = _infometecnico(sequelize, DataTypes);
  var informaticos = _informaticos(sequelize, DataTypes);
  var involucrados = _involucrados(sequelize, DataTypes);
  var jefe = _jefe(sequelize, DataTypes);
  var productos = _productos(sequelize, DataTypes);
  var programadores = _programadores(sequelize, DataTypes);
  var prototipo = _prototipo(sequelize, DataTypes);
  var proyectos = _proyectos(sequelize, DataTypes);
  var recursos = _recursos(sequelize, DataTypes);
  var relacionado = _relacionado(sequelize, DataTypes);
  var roles = _roles(sequelize, DataTypes);
  var software = _software(sequelize, DataTypes);
  var userrole = _userrole(sequelize, DataTypes);
  var users = _users(sequelize, DataTypes);

  empleados.belongsToMany(proyectos, { as: 'idProyecto_proyectos', through: asigna, foreignKey: "idEmp", otherKey: "idProyecto" });
  informaticos.belongsToMany(productos, { as: 'idProductos_productos', through: involucrados, foreignKey: "idInformatico", otherKey: "idProductos" });
  productos.belongsToMany(informaticos, { as: 'idInformatico_informaticos', through: involucrados, foreignKey: "idProductos", otherKey: "idInformatico" });
  proyectos.belongsToMany(empleados, { as: 'idEmp_empleados', through: asigna, foreignKey: "idProyecto", otherKey: "idEmp" });
  proyectos.belongsToMany(proyectos, { as: 'idProyRelaciona_proyectos', through: relacionado, foreignKey: "idProyect", otherKey: "idProyRelaciona" });
  proyectos.belongsToMany(proyectos, { as: 'idProyect_proyectos', through: relacionado, foreignKey: "idProyRelaciona", otherKey: "idProyect" });
  roles.belongsToMany(users, { as: 'idUser_users', through: userrole, foreignKey: "idRole", otherKey: "idUser" });
  users.belongsToMany(roles, { as: 'idRole_roles', through: userrole, foreignKey: "idUser", otherKey: "idRole" });
  productos.belongsTo(analistas, { as: "idAnalista_analista", foreignKey: "idAnalista"});
  analistas.hasMany(productos, { as: "productos", foreignKey: "idAnalista"});
  gastos.belongsTo(asigna, { as: "idProyecto_asigna", foreignKey: "idProyecto"});
  asigna.hasMany(gastos, { as: "gastos", foreignKey: "idProyecto"});
  gastos.belongsTo(asigna, { as: "idEmp_asigna", foreignKey: "idEmp"});
  asigna.hasMany(gastos, { as: "idEmp_gastos", foreignKey: "idEmp"});
  asigna.belongsTo(empleados, { as: "idEmp_empleado", foreignKey: "idEmp"});
  empleados.hasMany(asigna, { as: "asignas", foreignKey: "idEmp"});
  informaticos.belongsTo(empleados, { as: "idInformatico_empleado", foreignKey: "idInformatico"});
  empleados.hasOne(informaticos, { as: "informatico", foreignKey: "idInformatico"});
  jefe.belongsTo(empleados, { as: "idJefe_empleado", foreignKey: "idJefe"});
  empleados.hasOne(jefe, { as: "jefe", foreignKey: "idJefe"});
  corresponde.belongsTo(fases, { as: "nroSecuencia_fase", foreignKey: "nroSecuencia"});
  fases.hasMany(corresponde, { as: "correspondes", foreignKey: "nroSecuencia"});
  corresponde.belongsTo(fases, { as: "idProyectos_fase", foreignKey: "idProyectos"});
  fases.hasMany(corresponde, { as: "idProyectos_correspondes", foreignKey: "idProyectos"});
  genera.belongsTo(fases, { as: "nroSecuencia_fase", foreignKey: "nroSecuencia"});
  fases.hasMany(genera, { as: "genera", foreignKey: "nroSecuencia"});
  genera.belongsTo(fases, { as: "idProyectos_fase", foreignKey: "idProyectos"});
  fases.hasMany(genera, { as: "idProyectos_generas", foreignKey: "idProyectos"});
  analistas.belongsTo(informaticos, { as: "idAnalista_informatico", foreignKey: "idAnalista"});
  informaticos.hasOne(analistas, { as: "analistum", foreignKey: "idAnalista"});
  involucrados.belongsTo(informaticos, { as: "idInformatico_informatico", foreignKey: "idInformatico"});
  informaticos.hasMany(involucrados, { as: "involucrados", foreignKey: "idInformatico"});
  programadores.belongsTo(informaticos, { as: "idProgramador_informatico", foreignKey: "idProgramador"});
  informaticos.hasOne(programadores, { as: "programadore", foreignKey: "idProgramador"});
  proyectos.belongsTo(jefe, { as: "idJefe_jefe", foreignKey: "idJefe"});
  jefe.hasMany(proyectos, { as: "proyectos", foreignKey: "idJefe"});
  genera.belongsTo(productos, { as: "idProductos_producto", foreignKey: "idProductos"});
  productos.hasMany(genera, { as: "genera", foreignKey: "idProductos"});
  infometecnico.belongsTo(productos, { as: "idInforme_producto", foreignKey: "idInforme"});
  productos.hasOne(infometecnico, { as: "infometecnico", foreignKey: "idInforme"});
  involucrados.belongsTo(productos, { as: "idProductos_producto", foreignKey: "idProductos"});
  productos.hasMany(involucrados, { as: "involucrados", foreignKey: "idProductos"});
  prototipo.belongsTo(productos, { as: "idPrototipo_producto", foreignKey: "idPrototipo"});
  productos.hasOne(prototipo, { as: "prototipo", foreignKey: "idPrototipo"});
  software.belongsTo(productos, { as: "idSoftware_producto", foreignKey: "idSoftware"});
  productos.hasOne(software, { as: "software", foreignKey: "idSoftware"});
  asigna.belongsTo(proyectos, { as: "idProyecto_proyecto", foreignKey: "idProyecto"});
  proyectos.hasMany(asigna, { as: "asignas", foreignKey: "idProyecto"});
  fases.belongsTo(proyectos, { as: "idProyectos_proyecto", foreignKey: "idProyectos"});
  proyectos.hasMany(fases, { as: "fases", foreignKey: "idProyectos"});
  relacionado.belongsTo(proyectos, { as: "idProyect_proyecto", foreignKey: "idProyect"});
  proyectos.hasMany(relacionado, { as: "relacionados", foreignKey: "idProyect"});
  relacionado.belongsTo(proyectos, { as: "idProyRelaciona_proyecto", foreignKey: "idProyRelaciona"});
  proyectos.hasMany(relacionado, { as: "idProyRelaciona_relacionados", foreignKey: "idProyRelaciona"});
  corresponde.belongsTo(recursos, { as: "idRecurso_recurso", foreignKey: "idRecurso"});
  recursos.hasMany(corresponde, { as: "correspondes", foreignKey: "idRecurso"});
  userrole.belongsTo(roles, { as: "idRole_role", foreignKey: "idRole"});
  roles.hasMany(userrole, { as: "userroles", foreignKey: "idRole"});
  userrole.belongsTo(users, { as: "idUser_user", foreignKey: "idUser"});
  users.hasMany(userrole, { as: "userroles", foreignKey: "idUser"});

  return {
    analistas,
    asigna,
    corresponde,
    empleados,
    fases,
    gastos,
    genera,
    infometecnico,
    informaticos,
    involucrados,
    jefe,
    productos,
    programadores,
    prototipo,
    proyectos,
    recursos,
    relacionado,
    roles,
    software,
    userrole,
    users,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
