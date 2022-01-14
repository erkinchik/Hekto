const uuid = require("uuid");
const path = require("path");
const deviceService = require("../services/deviceService");
const db = require('../db')

class DeviceController {
  async create(req, res, next) {
    try {
      const { name, price, brandId, typeId, info } = req.body;
      const { img } = req.files;
      let fileName = uuid.v4() + ".jpg";
      img.mv(path.resolve(__dirname, "..", "static", fileName));

      const device = await deviceService.createDevice(
        name,
        price,
        brandId,
        typeId,
        fileName
      );

      res.json( device );
    } catch (e) {
      next(e);
    }

    // const device = await deviceService.createDevice({
    //   name,
    //   price,
    //   brandId,
    //   typeId,
    //   img: fileName,
    // });
  }
  async get(req, res) {}
  async getOne(req, res) {}
  async post(req, res) {}
  async update(req, res) {}
  async delete(req, res) {}
}

module.exports = new DeviceController();
