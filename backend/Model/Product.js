
const { DataTypes } = require('sequelize');
const { sequelize } = require('../Config/db');
const User = require('./UserModel');

const Product = sequelize.define('Product', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  type: {
    type: DataTypes.ENUM(
      'electronics', 'fashion', 'groceries', 'kids', 'home', 'sports', 'books', 'beauty', 'tools', 'outdoor'
    ),
    allowNull: false,
  },
  ratingRate: {
    type: DataTypes.FLOAT,
    defaultValue: 0,
  },
  ratingCount: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
  },
});

User.hasMany(Product, { as: 'products', foreignKey: 'userId' });
Product.belongsTo(User, { as: 'user', foreignKey: 'userId' });

module.exports = Product;
