
const Product = require('../Model/Product');

const createProduct = async (req, res) => {
  try {
    const product = await Product.create({ ...req.body, userId: req.user.id });
    
    const { id, name, image, price, type, ratingRate, ratingCount, userId, createdAt, updatedAt } = product;

    return res.status(201).json({
      message: 'Product created successfully',
      product: {
        id,
        name,
        image,
        price,
        type,
        ratingRate,
        ratingCount,
        userId,
        createdAt,
        updatedAt
      }
    });
  } catch (error) {
    console.error('Error creating product:', error);
    return res.status(500).json({ message: 'Failed to create product' });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    if (!products) {
      return res.status(404).json({ message: 'No products found' });
    }
    res.json(products);
  } catch (error) {
    console.error('Error getting products:', error);
    return res.status(500).json({ message: 'Failed to get products' });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Product.update(req.body, { where: { id, userId: req.user.id } });
    if (!updated) {
      return res.status(404).json({ message: 'Product not found' });
    }
    const updatedProduct = await Product.findOne({ where: { id } });
    return res.status(200).json({ message: 'Product updated successfully', product: updatedProduct });
  } catch (error) {
    console.error('Error updating product:', error);
    return res.status(500).json({ message: 'Failed to update product' });
  }
};

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Product.destroy({ where: { id, userId: req.user.id } });
    if (!deleted) {
      return res.status(404).json({ message: 'Product not found' });
    }
    return res.status(200).json({ message: 'Product deleted successfully' });
  } catch (error) {
    console.error('Error deleting product:', error);
    return res.status(500).json({ message: 'Failed to delete product' });
  }
};

const createProductScheduled = (req, res) => {
  const { minutes, product } = req.body;
  const userId = req.user.id;

  setTimeout(async () => {
    try {
      const newProduct = await Product.create({ ...product, userId });
      console.log('Scheduled product created successfully', newProduct);
    } catch (error) {
      console.error('Error creating scheduled product:', error);
    }
  }, minutes * 60 * 1000);

  return res.status(200).json({ message: 'Product will be added after the specified time' });
};

module.exports = {
  createProduct,
  getAllProducts,
  updateProduct,
 deleteProduct,
 createProductScheduled,
};
