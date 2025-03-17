const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");

const Passenger = sequelize.define("Passenger", {
  passenger_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  first_name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  birth_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  passport_number: {
    type: DataTypes.STRING(20),
    allowNull: false,
    unique: true,
  },
});

module.exports = Passenger;
