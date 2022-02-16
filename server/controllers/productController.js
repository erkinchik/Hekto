const deviceService = require("../services/productService");

class DeviceController {
  async create(req, res, next) {
    try {
      let { name, price, brandId, typeId, info } = req.body;
      const { img } = req.files;
      const device = await deviceService.createDevice(
        name,
        price,
        brandId,
        typeId,
        img,
        info
      );

      res.json(device);
    } catch (e) {
      next(e);
    }
  }
  async get(req, res, next) {
    try {
      const { brandId, typeId, limit, page } = req.query;
      const devices = await deviceService.getAll(brandId, typeId, limit, page);

      res.json(devices);
    } catch (e) {
      next(e);
    }
  }
  async getOne(req, res, next) {
    try {
      const { id } = req.params;
      const deviceById = await deviceService.getById(id);
      res.json(deviceById);
    } catch (e) {
      next(e);
    }
  }
  async update(req, res) {}
  async delete(req, res) {
    res.json(await deviceService.delete(req.params.id));
  }
}

module.exports = new DeviceController();
