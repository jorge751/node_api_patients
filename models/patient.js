'use strict';
module.exports = (sequelize, DataTypes) => {
  const Patient = sequelize.define('Patients', {
    numpac: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    nombre: DataTypes.STRING,
    sexo: DataTypes.STRING,
    documento: DataTypes.INTEGER,
    tipdoc: DataTypes.STRING,
    cuit: DataTypes.STRING,
    regimen: DataTypes.INTEGER,
    nacimiento: DataTypes.DATEONLY,
    domicilio: DataTypes.STRING,
    localidad: DataTypes.STRING,
    codpost: DataTypes.INTEGER,
    provincia: DataTypes.STRING,
    telefono: DataTypes.STRING,
    nomdiag2: DataTypes.STRING,
    fallecim: DataTypes.DATEONLY,
    cobertura: DataTypes.BOOLEAN,
    vto_discap: DataTypes.DATEONLY,
    fec_grab: DataTypes.DATEONLY,
    hor_grab: DataTypes.STRING,
    usr_grab: DataTypes.STRING,
    wks_grab: DataTypes.STRING,
    tip_grab: DataTypes.STRING
  }, {
    charset: 'utf8',
    collate: 'utf8_spanish_ci', 
    freezeTableName: true,
    timestamps: false
  });
  Patient.associate = function(models) {
    // associations can be defined here
  };
  return Patient;
};