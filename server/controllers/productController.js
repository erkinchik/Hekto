const productService = require("../services/productService");

class ProductController {
  async create(req, res, next) {
    try {
      let { name, price, brandId, categoryId, inStock, info, sale } = req.body;
      const { img } = req.files;

      const product = await productService.createProduct(
        name,
        price,
        brandId,
        categoryId,
        img,
        info,
        inStock,
        sale
      );
      res.json(product);
    } catch (e) {
      next(e);
    }
  }
  async get(req, res, next) {
    try {
      const { brandId, categoryId, limit, page } = req.query;
      const products = await productService.getAll(
        brandId,
        categoryId,
        limit,
        page
      );

      res.json(products);
    } catch (e) {
      next(e);
    }
  }
  async getOne(req, res, next) {
    try {
      const { id } = req.params;
      const productById = await productService.getById(id);
      res.json(productById);
    } catch (e) {
      next(e);
    }
  }
  async update(req, res) {}
  async delete(req, res) {
    res.json(await productService.delete(req.params.id));
  }
}

module.exports = new ProductController();
