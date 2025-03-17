const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");

const Aircraft = sequelize.define("Aircraft", {
  aircraft_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  model: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  manufacturer: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  capacity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Aircraft;
