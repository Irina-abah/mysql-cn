const sequelize = require("../db/connection");
const { DataTypes } = require("sequelize");

const Film = sequelize.define("Netflix", {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  actor: {
    type: DataTypes.STRING,
    allowNull: false
  },
  duration: {
    type: DataTypes.INTEGER,
    // allowNull: true
  },
  year: {
    type: DataTypes.INTEGER,
    // allowNull: true
  }
});

module.exports = Film;