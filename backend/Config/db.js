const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');


dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE, process.env.USER_NAME, process.env.PASSWORD, {
  dialect: 'mysql',
  host: process.env.HOST,
  port: process.env.DB_PORT || 12906,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

const connectDB = async () => {
  try {
    //  console.log('Database:', process.env.DATABASE);
    // console.log('Username:', process.env.USER_NAME);
    // console.log('Password:', process.env.PASSWORD);
    // console.log('Host:', process.env.HOST);
    // console.log('Port:', process.env.DB_PORT);
    await sequelize.authenticate();
    console.log('Connected to MySQL');
  } catch (error) {
    console.error('Unable to connect to MySQL:', error);
  }
};
//connectDB()

module.exports = { sequelize, connectDB };
