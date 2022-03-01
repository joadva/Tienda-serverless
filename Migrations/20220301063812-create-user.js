'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.String
      },
      nombre: {
        type: Sequelize.TEXT
      },
      contrasena: {
        type: Sequelize.TEXT
      },
      email: {
        type: Sequelize.TEXT
      },
      estatus:{
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      
    },{
      charset: 'utf8',
      collate: 'utf8_general_ci'
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Usuarios');
  }
};