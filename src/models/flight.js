const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");

const Flight = sequelize.define("Flight", {
  flight_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  flight_number: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
  departure_airport: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
  arrival_airport: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
  departure_time: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  arrival_time: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  aircraft_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

module.exports = Flight;
