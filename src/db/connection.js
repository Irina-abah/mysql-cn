const { Sequelize } = require("sequelize");
require("dotenv").config();

let sequelize = new Sequelize(process.env.MYSQL_URL);

// sequelize.authenticate()
// .then(() => console.log("Connected to db"))
// .catch((err) => console.log(err));

// let connection = async () => {
//   try {
//     await sequelize.authenticate()
//   } catch (error) {
//     console.log(error)
//   }
// }

// connection()

module.exports = sequelize;