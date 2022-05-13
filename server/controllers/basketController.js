const basketService = require("../services/basketService");
const userController = require("../services/userService");

class BasketController {
  async add(req, res) {
    try {
      const { id, product_id } = req.body;
      const { id: basket_id } = await userController.getBasket(id);
      const product = await basketService.addProduct(basket_id, product_id);
      res.json(product);
    } catch (e) {
      res.json(e);
    }
  }
  async get(req, res) {
    try {
      const { id } = req.params;
      const { id: basket_id } = await userController.getBasket(id);
      const products = await basketService.getProduct(basket_id);
      res.json(products);
    } catch (e) {
      res.json(e);
    }
  }

  async update(req, res) {}
  async delete(req, res) {}
}

module.exports = new BasketController();
