const db = require("../db");

class DeviceService {
  async createDevice(name, price, brandId, typeId, img) {
    const newDevice = await db.query('INSERT INTO device (name,price,brand_id,type_id,img) VALUES ($1,$2,$3,$4,$5) RETURNING *',[name, price, brandId, typeId,img]);

    return newDevice.rows[0];
  }
  async getAll() {
    const types = await db.query("SELECT * FROM device");
    return types.rows;
  }
}

module.exports = new DeviceService();
