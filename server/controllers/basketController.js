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
    // res.json(await brandService.getAll());
  }

  async update(req, res) {}
  async delete(req, res) {}
}

module.exports = new BasketController();
