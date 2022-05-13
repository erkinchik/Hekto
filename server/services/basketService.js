const db = require("../db");

class BasketService {
  async addProduct(basket_id, product_id) {
    const product = await db.query(
      "INSERT INTO basket_product (basket_id,product_id) values ($1,$2) RETURNING *",
      [basket_id, product_id]
    );
    return product.rows[0];
  }
  async getProduct(basket_id) {
    const products = await db.query(
      "select * from basket_product bp left join product on bp.product_id = product.id where bp.basket_id = $1",
      [basket_id]
    );
    return products.rows;
  }
}

module.exports = new BasketService();
