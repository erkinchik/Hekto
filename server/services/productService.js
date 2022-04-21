const db = require("../db");
const uuid = require("uuid");
const path = require("path");

class ProductService {
  async createProduct(
    name,
    price,
    brandId,
    categoryId,
    img,
    info,
    inStock,
    sale
  ) {
    let fileName = uuid.v4() + ".jpg";
    img.mv(path.resolve(__dirname, "..", "static", fileName));

    const newProduct = await db.query(
      "INSERT INTO product (name,price,brand_id,category_id,img,in_stock,sale) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *",
      [name, price, brandId, categoryId, fileName, inStock, sale]
    );

    if (info) {
      info = JSON.parse(info);
      info.forEach((i) => {
        return db.query(
          "INSERT INTO product_info (title,description,product_id) VALUES ($1,$2,$3)",
          [i.title, i.description, newProduct.rows[0].id]
        );
      });
    }

    return newProduct.rows[0];
  }

  async getAll(brandId, categoryId, limit = 20, page = 1) {
    let offset = page * limit - limit;

    let allProducts;

    if (brandId && categoryId) {
      allProducts = await db.query(
        "SELECT * FROM product where brand_id = $1 and category_id = $2 ORDER BY id LIMIT $3 OFFSET $4",
        [brandId, categoryId, limit, offset]
      );
    }
    if (!brandId && categoryId) {
      allProducts = await db.query(
        "SELECT * FROM product where category_id = $1 ORDER BY id LIMIT $2 OFFSET $3 ",
        [categoryId, limit, offset]
      );
    }
    if (brandId && !categoryId) {
      allProducts = await db.query(
        "SELECT * FROM product where brand_id = $1 ORDER BY id LIMIT $2 OFFSET $3 ",
        [brandId, limit, offset]
      );
    }
    if (!brandId && !categoryId) {
      allProducts = await db.query(
        "SELECT * FROM product ORDER BY id LIMIT $1 OFFSET $2 ",
        [limit, offset]
      );
    }

    return { count: allProducts.rows.length, rows: [...allProducts.rows] };
  }

  async getById(id) {
    const { rows: product } = await db.query(
      "SELECT * FROM product where id = $1",
      [id]
    );
    const { rows: productInfo } = await db.query(
      "SELECT * FROM product_info WHERE product_id=$1",
      [id]
    );

    return product.length ? { ...product[0], productInfo } : [];
  }

  async delete(id) {
    await db.query(
      "DELETE FROM product_info WHERE product_id IN (SELECT id FROM product WHERE id = $1)",
      [id]
    );
    const product = await db.query("DELETE FROM product where id = $1", [id]);
    return !product.rows.length;
  }
}

module.exports = new ProductService();
