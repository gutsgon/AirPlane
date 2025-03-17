const { DataTypes } = require("sequelize");
const sequelize = require("../database/database");

const Sysuser = sequelize.define("Sysuser", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  login_email: {
    type: DataTypes.STRING(150),
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  user_type: {
    type: DataTypes.STRING(10),
    allowNull: false,
  },
});

module.exports = Sysuser;
