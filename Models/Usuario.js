const { Sequelize, DataTypes, STRING } = require('sequelize');
const sequelize = new Sequelize('mariadb::memory');
const { db } = require('../conection');
// const { Inmuebles } = require('../Models/Inmuebless');
const Usuarios = db.define(
	'Usuarios',
	{
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement:true,
			allowNull: false
		},

		email: {
			type: DataTypes.TEXT
		},
		contrasena: {
			type: DataTypes.TEXT
		},
		nombre: {
            type: DataTypes.TEXT
        },
		estatus: {
			type: DataTypes.BOOLEAN
		},
		
		createdAt: {
            allowNull: false,
            type: Sequelize.DATE		},
		updatedAt: {
            allowNull: false,
            type: Sequelize.DATE		}
	},
	{
		charset: 'utf8',
		collate: 'utf8_general_ci',
		sequelize,
		tableName: 'Usuarios'
	}
);

module.exports.Usuarios = Usuarios;