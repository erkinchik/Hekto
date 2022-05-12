const db = require("../db");

class UserService {
  async getAll() {}
  async findOne(email) {
    const user = await db.query('SELECT * FROM "user" where email = $1', [
      email,
    ]);
    return user.rows[0];
  }
  async createUser(email, password, role = "USER") {
    const user = await db.query(
      'INSERT INTO "user" (email,password,role) values ($1,$2,$3) RETURNING *',
      [email, password, role]
    );
    return user.rows[0];
  }
  async createBasket(userId) {
    const basket = await db.query(
      "INSERT INTO basket (user_id) VALUES ($1) RETURNING *",
      [userId]
    );
    return basket.rows[0];
  }
  async getBasket(userId) {
    const basket = await db.query("SELECT * FROM basket WHERE user_id = $1", [
      userId,
    ]);
    return basket.rows[0];
  }
}

module.exports = new UserService();
