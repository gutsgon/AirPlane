const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");

const Boarding_pass = sequelize.define("Boarding_pass", {
  boarding_pass_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  seat_number: {
    type: DataTypes.STRING(5),
    allowNull: false,
  },
  passenger_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  flight_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  issue_time: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

module.exports = Boarding_pass;
