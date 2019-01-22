'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Patients', {
      numpac: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      sexo: {
        type: Sequelize.STRING
      },
      documento: {
        type: Sequelize.INTEGER
      },
      tipdoc: {
        type: Sequelize.STRING
      },
      cuit: {
        type: Sequelize.STRING
      },
      regimen: {
        type: Sequelize.INTEGER
      },
      nacimiento: {
        type: Sequelize.DATEONLY
      },
      domicilio: {
        type: Sequelize.STRING
      },
      localidad: {
        type: Sequelize.STRING
      },
      codpost: {
        type: Sequelize.INTEGER
      },
      provincia: {
        type: Sequelize.STRING
      },
      telefono: {
        type: Sequelize.STRING
      },
      nomdiag2: {
        type: Sequelize.STRING
      },
      fallecim: {
        type: Sequelize.DATEONLY
      },
      cobertura: {
        type: Sequelize.BOOLEAN
      },
      vto_discap: {
        type: Sequelize.DATEONLY
      },
      fec_grab: {
        type: Sequelize.DATEONLY
      },
      hor_grab: {
        type: Sequelize.STRING
      },
      usr_grab: {
        type: Sequelize.STRING
      },
      wks_grab: {
        type: Sequelize.STRING
      },
      tip_grab: {
        type: Sequelize.STRING
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Patients');
  }
};