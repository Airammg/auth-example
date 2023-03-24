const { DataTypes } = require('sequelize')
const dbConnection = require('../../db')

const User = dbConnection.define(
  'user',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
    ,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  })

module.exports = User