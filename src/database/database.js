const { Sequelize } = require("sequelize");
require("dotenv").config();

// const sequelize = new Sequelize({
//     dialect: 'postgres',
//     host: 'localhost',
//     port: 5432,
//     username: 'user',
//     password: '123',
//     database: 'demo_flight',
//     logging: false,
//     define: {
//         timestamps: false,
//     }
// });

const sequelize = new Sequelize(
  // "postgresql://bancop2_owner:aD0MisYhNI6b@ep-shiny-scene-a576hqzm.us-east-2.aws.neon.tech/bancop2?sslmode=require",
  process.env.CONNECTION_DB,
  {
    pool: {
      max: 10,
    },
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Conexão com o banco de dados foi bem sucedida!");
  })
  .catch((err) => {
    console.error("Não foi possível conectar ao banco de dados: ", err);
  });

module.exports = sequelize;
