const db = require("../db");

class BasketService {
  async addProduct(basket_id, product_id) {
    const product = await db.query(
      "INSERT INTO basket_product (basket_id,product_id) values ($1,$2) RETURNING *",
      [basket_id, product_id]
    );
    return product.rows[0];
  }
}

module.exports = new BasketService();
